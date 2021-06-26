import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {Text, View, Image, Alert, ActivityIndicator} from 'react-native'

import {styles} from './styles'

import IllustrationImg from '../../assets/illustration.png'
import { ButtonIcon } from '../../Components/ButtonIcon'
import { Background } from '../../Components/Background';

import {useAuth} from '../../hooks/auth'
import { theme } from '../../global/styles/theme';

export function SignIn() {

  const {loading, signIn} = useAuth();

  async function handleSignIn(){
    try {
      await signIn();
    }catch(error)
    {
       Alert.alert(error)
    }
  }
  return (
    <Background>
    <View style={styles.container}  >
      <Image 
        source={IllustrationImg} 
        style={styles.image} 
        resizeMode="stretch"
      />
      <View style={styles.content} accessible={true} >
        <Text style={styles.title} accessibilityRole="text">
            Conecte-se {'\n'} 
            e organize {'\n'} 
            suas jogatinas {'\n'} 
            facilmente
        </Text>
        <Text style={styles.subtitle} accessibilityRole="text">
          Crie grupos para jogar seus games {'\n'}
          favoritos com seus amigos
        </Text>
      {  
        loading ? <ActivityIndicator color={theme.colors.primary}/>:
        <ButtonIcon 
          title="Entrar com discord"  
          onPress={handleSignIn}
          accessibilityLabel="Conectar com Discord"
        />}
      </View>
    </View>
    </Background>
  );
}

