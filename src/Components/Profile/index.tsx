import React from 'react'
import { View, Text} from 'react-native'
import { Avatar } from '../Avatar'
import {styles} from './styles'

export function Profile() {
    return(
        <View style={styles.container}>
            <Avatar urlImage="https://github.com/PriscilaZeferino.png"/>
            <View>
                <View style={styles.user} accessible={true}>
                    <Text 
                        style={styles.greeting} 
                        accessibilityRole="text"
                    >
                        Olá
                    </Text>
                    <Text 
                        style={styles.username}
                        accessibilityRole="text"
                    >
                        Priscila
                    </Text>
                </View>
                <Text 
                    style={styles.message} 
                    accessibilityRole="text"
                >
                    Hoje é dia de vitória!
                </Text>
            </View>
        </View>
    )
}