import React, { useState } from 'react'

import {View, Text} from 'react-native'

import {styles} from './styles';

import {categories} from '../../utils/categories'

import {SvgProps} from 'react-native-svg'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../../global/styles/theme';


type Props = RectButtonProps & {
    title: string;
    icon: React.FC<SvgProps>;
    hasCheckBox?: boolean;
    checked?: boolean;
}

export function Category ({title, icon: Icon, checked = false, hasCheckBox = false, ...rest} : Props) {
        
        const {secondary40, secondary50, secondary70, secondary85} = theme.colors;

        const [selecionada, setSelecionada] = useState('');

        return (
            <RectButton {...rest}>
                <LinearGradient
                    style={styles.container}
                    colors={[secondary50, secondary70]}
                    accessibilityHint={
                        checked ?  'Categoria' + title + ' já está selecionada' :
                        "Selecionar Categoria" + title
                    }
                >
                    <LinearGradient 
                        style={[styles.content, {opacity: checked ? 1 : 0.5}]}
                        colors={[checked ? secondary85 : secondary50, secondary40]}
                    >
                        {
                            hasCheckBox &&
                            <View style={checked? styles.checked : styles.check}/>

                        }

                        <Icon 
                                width={48}
                                height={48}
                            />
                        <Text style={styles.title} accessibilityRole="text">
                            {title}
                        </Text>
                    </LinearGradient>
                </LinearGradient>
            </RectButton>
        )
}