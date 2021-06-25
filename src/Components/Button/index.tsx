import React from 'react'

import {RectButton, RectButtonProps} from 'react-native-gesture-handler';

import {
    Text, 
    Image,
    View,

} from 'react-native'

import DiscordImg from '../../assets/discord.png'
import {styles} from './styles';
import { TouchableOpacityProps } from 'react-native';

type Props = RectButtonProps & TouchableOpacityProps & {
    title: string,
}
export function Button({title, ...rest}:Props) {
    return (
        <RectButton 
            style={styles.container}
            accessibilityRole="button"
            {...rest}
        >
            <Text style={styles.title}
                accessibilityRole="text"
                accessibilityLabel={title}>
                {title}
            </Text>
        </RectButton>
    )
}