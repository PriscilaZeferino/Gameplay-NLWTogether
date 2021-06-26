import React from 'react'
import { View, Text} from 'react-native'
import { useAuth } from '../../hooks/auth';
import { Avatar } from '../Avatar'
import {styles} from './styles'

export function Profile() {

    const {user} = useAuth();

    return(
        <View style={styles.container}>
            <Avatar urlImage={user.avatar}/>
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
                       {user.firstName}
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