import React from 'react';
import { Fontisto } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';

import {
  ImageBackground,
  Text,
  View,
  FlatList
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
import { Member } from '../../Components/Member';
import { TouchableOpacity } from 'react-native';
import { ButtonIcon } from '../../Components/ButtonIcon';

export function AppointmentDetails () {
    const members = [
        {
            id: '1',
            username: 'Priscila',
            avatar_url: 'https://github.com/PriscilaZeferino.png',
            status: 'online'
        },
        {
            id: '2',
            username: 'Livia',
            avatar_url: 'https://github.com/PriscilaZeferino.png',
            status: 'offline'
        }
    ]

    return (
        <Background>
            <Header
                title="Detalhes"
                action={
                    <BorderlessButton>
                        <Fontisto
                            name="share"
                            size={24}
                            color={theme.colors.primary}
                            accessibilityRole="text"
                            accessibilityLabel="Compartilhar"
                            accessibilityHint="Compartilhar nas redes sociais" 
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
                        Lendários
                    </Text>

                    <Text style={styles.subtitle}>
                        É hoje que vamos chegar ao challenger sem perder uma partida da md10
                    </Text>
                </View>

            </ImageBackground>

            <ListHeader
                title="Jogadores"
                subtitle="Total 3"        
            />

            <FlatList
                data={members}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <Member data={item}/>
                )}
                ItemSeparatorComponent={() => <ListDivider/>}
                style={styles.members}
            />

            <View style={styles.footer}>
                    <ButtonIcon title="Entrar na partida"/>
            </View>

        </Background>

    )
    
}