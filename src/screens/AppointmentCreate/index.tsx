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

// import { ModalView } from '../../components/ModalView';
// import { SmallInput } from '../../components/SmallInput';
// import { GuildIcon } from '../../components/GuildIcon';
// import { TextArea } from '../../components/TextArea';
// import { GuildProps } from '../../components/Guild';
// import { Button } from '../../components/Button';
// import { Guilds } from '../Guilds';

export function AppointmentCreate() {

    const [category, setCategory] = useState('')

    return (
        <View>
            <Header
                title="Agendar Partida"
            />
            <Text style={styles.label}>
                Categoria
            </Text>

            <CategorySelect
                hasCheckBox
                setCategory={setCategory}
                categorySelected={category}

            />

            <View style={styles.form}>
                <RectButton>
                    <View style={styles.select}>

                        <View style={styles.image}/>

                        <View style={styles.selectBody}>
                            <Text style={styles.label}>
                                Selecione um servidor
                            </Text>
                        </View>

                        <Feather name="chevron-right" color={theme.colors.heading} size={18} />
                    
                    </View>
                </RectButton>
            </View>
        </View>
    )
}