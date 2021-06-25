import React, { Children } from 'react';

import {RectButton, RectButtonProps} from 'react-native-gesture-handler';

import { styles} from './styles';

import {MaterialCommunityIcons} from '@expo/vector-icons';
import { theme } from '../../global/styles/theme';
import { TouchableOpacityProps } from 'react-native';



type Props = RectButtonProps & TouchableOpacityProps;
  

export function ButtonAdd ({...rest } : Props) {
    return (

        <RectButton 
            style={styles.container} 
            accessibilityRole="button"
            {...rest}
            >
            <MaterialCommunityIcons
                name="plus"
                color={theme.colors.heading}
                size={24}
            />
        </RectButton>
    )
}