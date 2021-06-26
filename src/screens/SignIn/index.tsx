import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {Text, View, Image, Alert } from 'react-native'

import {styles} from './styles'

import IllustrationImg from '../../assets/illustration.png'
import { ButtonIcon } from '../../Components/ButtonIcon'
import { Background } from '../../Components/Background';

import {useAuth} from '../../hooks/auth'

export function SignIn() {

  const {user, signIn} = useAuth();

  async function handleSignIn(){
    try {
      await signIn();
    }catch(error)
    {
       Alert.alert(error)
    }
  }

    // const SignIn = () => {
    // const {user, signIn} = useAuth();

    // const handleSignIn = async () => {
    //       try {
    //   await signIn();
    // }catch(error)
    // {
    //    Alert.alert(error)
    // }
    // }
  

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
        <ButtonIcon 
          title="Entrar com discord"  
          onPress={handleSignIn}
          accessibilityLabel="Conectar com Discord"
        />
      </View>
    </View>
    </Background>
  );
}

