import React from 'react'
import {View, Text} from 'react-native'

type Props = {
    title: string,
    subtitle: string
}

import {styles} from './styles'
export function ListHeader({title, subtitle} : Props)
{
    return (
        <View style={styles.container} accessible={true}>
            <Text 
                style={styles.title} 
                accessibilityRole="text"
            >
                {title}
            </Text>
            <Text 
                style={styles.subtitle}
                accessibilityRole="text"    
            >
                {subtitle}
            </Text>
        </View>
    )
}