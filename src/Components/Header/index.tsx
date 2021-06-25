import React, { ReactNode } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { BorderlessButton, BorderlessButtonProps } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from 'react-native';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';
import { TouchableOpacityProps } from 'react-native';

type Props = BorderlessButtonProps & TouchableOpacityProps & {
  title: string;
  action?: ReactNode;
}

export function Header({ title, action}: Props ){

    const {secondary100, secondary40, heading} = theme.colors;

    const navigation = useNavigation();
    function handleGoBack()
    {
        navigation.goBack();
    }
    return (
        <LinearGradient
            style={styles.container}
            colors={[secondary100, secondary40]}
            accessible={true}
        >    

        <TouchableOpacity 
            accessibilityLabel="Voltar"
            accessibilityHint="Voltar para tela anterior"
        >
            <BorderlessButton 
                onPress={handleGoBack}  
            >
                <Feather name="arrow-left" size={24} color={heading}/>
            </BorderlessButton>
        </TouchableOpacity>
        <Text style={styles.title}>
            {title}
        </Text>

        {
            action &&
            <View>
                {action}
            </View>
        }
        </LinearGradient>
    )
}