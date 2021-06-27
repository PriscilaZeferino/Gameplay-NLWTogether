import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'
import { View, Text, Image} from 'react-native'
import { theme } from '../../global/styles/theme';
import { useAuth } from '../../hooks/auth';
import {styles} from './styles'

type Props = {
    urlImage: string;
}
export function Avatar({urlImage}: Props) {
    // const {secondary50, secondary70} = theme.colors;

    const {colorScheme} = useAuth();
    return  (
        <LinearGradient
            style={styles.container}
            colors={[`theme.${colorScheme}.colors.secondary50`, `theme.${colorScheme}.colors.secondary70`]}
        >
        <Image 
            source={{uri: urlImage}}
            style={styles.avatar}
            accessibilityRole="image"
        />
        </LinearGradient>
    )
}