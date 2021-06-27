import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';

import {
  Text,
  View,
  Platform,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';

import { CategorySelect } from '../../Components/CategorySelect'
import { Header } from '../../Components/Header'
import { SmallInput } from '../../Components/SmallInput'
import { TextArea } from '../../Components/TextArea'
import { Button } from '../../Components/Button';
import { ModalView } from '../../Components/ModalView';
import { GuildProps } from '../../Components/Guild';
import { GuildIcon } from '../../Components/GuildIcon';
import { Guilds } from '../Guilds';
import { Background } from '../../Components/Background';

export function AppointmentCreate() {

    const [category, setCategory] = useState('');
    const [openGuildsModal, setOpenGuildsModal] = useState(false);
    const [guild, setGuild] = useState<GuildProps> ({}as GuildProps)

    function handleOpenGuilds(){
        setOpenGuildsModal(true)
    }

    function handleCloseGuilds(){
        setOpenGuildsModal(false)
    }

    function handleGuildSelect(guildSelect: GuildProps)
    {
        setGuild(guildSelect);
        setOpenGuildsModal(false)
    }

    function handleCategorySelect(categoryId: string)
    {   
        setCategory(categoryId);
    }


    return (
        <Background>
        <KeyboardAvoidingView 
            style={styles.container} 
            behavior={Platform.OS === 'ios'? 'padding' : 'height'}
            >
            <Header
                title="Agendar Partida"
            />
            <ScrollView>
            <Text 
                style={[styles.label, 
                {marginLeft: 24, marginTop: 36, marginBottom: 18}]}>
                Categoria
            </Text>

            <CategorySelect
                hasCheckBox
                setCategory={handleCategorySelect}
                categorySelected={category}

            />

            <View style={styles.form}>
                <RectButton onPress={handleOpenGuilds}>
                    <View 
                        style={styles.select} 
                        accessible={true}
                        accessibilityRole="button"
                        accessibilityHint={guild.name ? "Servidor" + guild.name + "selecionado. Toque-me para selecionar outro servidor." : "Nenhum Servidor Selecionado. Toque-me para selecionar"}
         
                    >

                        {
                            guild.icon ? <GuildIcon guildId={guild.id} iconId={guild.icon}/> :  <View style={styles.image}/>

                        }

                        <View style={styles.selectBody}>
                            <Text style={styles.label}
        
                            >
                                {
                                    guild.name ? guild.name : 'Selecione um servidor'
                                }
                            </Text>
                        </View>

                        <Feather name="chevron-right" color={theme.colors.heading} size={18} />
                    
                    </View>
                </RectButton>

                <View style={styles.field}>
                    <View>
                            <Text 
                                style={[styles.label, {marginBottom: 12}]}
                            >
                                Dia e mês</Text>
                            <View style={styles.column}>
                                <SmallInput maxLength={2}/>
                            <Text style={styles.divider}>/</Text>
                                <SmallInput maxLength={2}/>
                            </View> 
                    </View>
                    
                    <View>
                            <Text 
                                style={[styles.label, {marginBottom: 12}]}
                            >
                                Hora e minuto
                            </Text>
                            <View style={styles.column}>
                                <SmallInput maxLength={2}/>
                            <Text style={styles.divider}>:</Text>
                                <SmallInput maxLength={2}/>
                            </View> 
                    </View>
                </View>

            <View style={[styles.field, {marginBottom: 12}]}>
                <Text style={styles.label}>
                    Descrição
                </Text>
                <Text style={styles.caracteresLimit}>
                    Max 100 caracteres
                </Text>
            </View>

            <TextArea 
                multiline
                maxLength={100}
                numberOfLines={5}
                autoCorrect={false}
            />
                <View style={styles.footer}>
                    <Button title="Agendar"/>
                </View>
            </View>

            </ScrollView>
            <ModalView 
                visible={openGuildsModal}
                closeModal={handleCloseGuilds}
            >
                <Guilds 
                    handleGuildSelect={handleGuildSelect}
                />
            </ModalView>
        </KeyboardAvoidingView>
        </Background>
    )

}