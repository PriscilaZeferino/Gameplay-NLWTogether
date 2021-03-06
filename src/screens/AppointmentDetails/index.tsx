import React, {useState}from 'react';
import { Fontisto } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';
import * as Linking from 'expo-linking'
import {
  ImageBackground,
  Text,
  View,
  FlatList,
  Alert,
  Share,
  Platform
} from 'react-native';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';
import BannerImg from '../../assets/banner.png';

import { ListDivider } from '../../Components/ListDivider';
import { Background } from '../../Components/Background';
// import { ListHeader } from '../../components/ListHeader';
// import { ButtonIcon } from '../../components/ButtonIcon';
// import { Member } from '../../components/Member';
import { Header } from '../../Components/Header'
import { ListHeader } from '../../Components/ListHeader';
import { Member, MemberProps } from '../../Components/Member';
import { TouchableOpacity } from 'react-native';

import { ButtonIcon } from '../../Components/ButtonIcon';

import {Link, useRoute} from '@react-navigation/native';
import { AppointmentProps } from '../../Components/Appointment';
import { api } from '../../services/api';
import { useEffect } from 'react';
import { Load } from '../../Components/Load';

type Params = {
    guildSelected: AppointmentProps
}

type GuildWidget = {
    id: string;
    name: string;
    instant_invite: string;
    members: MemberProps[];
    presence_count: number;
}

export function AppointmentDetails () {
    
    const route = useRoute();

    const {guildSelected} = route.params as Params;

    const [GuildWidget, setGuildWidget] = useState<GuildWidget>({} as GuildWidget);
    const [loading, setLoading] = useState(true);

    const [totalMembers, setTotalMembers] = useState<Number>(0);



    async function fetchGuildInfo() {
        try {
            const response = await api.get(`/guilds/${guildSelected.guild.id}/widget.json`);
            setGuildWidget(response.data);
            (response.data.members.length !== undefined) ? setTotalMembers(response.data.members.length) : 0;
        } 
        catch
        {
            Alert.alert("Verifique as configura????es do servidor. Sera que o widget est?? habilitado? :/ ");
        }
        finally{
            setLoading(false);
        }
    }        

    function handleShareInvitation () {


        const invite = GuildWidget.instant_invite;

        if(invite !== null)
        {
            const message = Platform.OS === 'ios' 
            ? `Junte-se a ${guildSelected.guild.name}` 
            : GuildWidget.instant_invite;
    
            Share.share({
                message,
                url: GuildWidget.instant_invite
            })        }
        else
        {
            Alert.alert("N??o foi possivel redirecionar para o servidor!");
        }



    }

    function handleOpenGuild() {

        const invite = GuildWidget.instant_invite;
        console.log(invite);

        if(invite !== null)
        {
            Linking.openURL(GuildWidget.instant_invite);
        }
        else
        {
            Alert.alert("N??o foi possivel redirecionar para o servidor!");
        }
    }

    useEffect(() => {
        fetchGuildInfo();
    }, [])
    return (
        <Background>
            <Header
                title="Detalhes"
                action={
                    guildSelected.guild.owner && 
                    <BorderlessButton>
                        <Fontisto
                            name="share"
                            size={24}
                            color={theme.colors.primary}
                            accessibilityRole="text"
                            accessibilityLabel="Compartilhar"
                            accessibilityHint="Compartilhar nas redes sociais" 
                            onPress={handleShareInvitation}
                        />
                    </BorderlessButton>
                }
            />

            <ImageBackground
                source={BannerImg}
                style={styles.banner}
            >
                <View style={styles.bannerContent}>
                    <Text style={styles.title}>
                        {guildSelected.guild.name}
                    </Text>

                    <Text style={styles.subtitle}>
                        {guildSelected.description}
                    </Text>
                </View>

            </ImageBackground>
{
     loading ? <Load/> :
     
     <>
            <ListHeader
                title="Jogadores"
                subtitle={`Total ${totalMembers}`}  
            />

            <FlatList
                data={GuildWidget.members ? GuildWidget.members : []}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <Member data={item}/>
                )}
                ItemSeparatorComponent={() => <ListDivider isCentered/>}
                style={styles.members}
                contentContainerStyle={{paddingBottom: 69}}
                ListEmptyComponent={() => ( 
                    <View style={styles.emptyContainer}>
                      <Text style={styles.emptyText}>
                        N??o h?? ningu??m online agora.
                      </Text>
                    </View>
                  )}
                />
            </>
            }

            {
                guildSelected.guild.owner && 
                <View style={styles.footer}>
                    <ButtonIcon 
                        onPress={handleOpenGuild}
                        title="Entrar na partida"
                        accessibilityRole="button"
                        accessibilityLabel="Entrar na partir"
                        accessibilityHint="Abrir o servidor no discord" 
    
                    />
                </View>
            }
            

        </Background>

    )
    
}