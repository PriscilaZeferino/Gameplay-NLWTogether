import React from 'react'
import { View, Text, Alert} from 'react-native'
import { useAuth } from '../../hooks/auth';
import { Avatar } from '../Avatar'
import {styles} from './styles'

import { RectButton } from 'react-native-gesture-handler';

export function Profile() {

    const {user, signOut} = useAuth();

    function handleSignOut() {
        Alert.alert('Logout', 'Deseja sair do Gameplay?', 
        [{
            text: 'Não',
            style: 'cancel'
        },
        {
            text: 'Sim',
            onPress: () => signOut()
        },
    ]
        )
    }

    return(
        <View style={styles.container}>
            <RectButton onPress={handleSignOut}>
                <Avatar urlImage={user.avatar}/>
            </RectButton>
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