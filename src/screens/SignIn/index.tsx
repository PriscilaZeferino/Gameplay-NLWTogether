import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {Text, View, Image } from 'react-native'

import {styles} from './styles'

import IllustrationImg from '../../assets/illustration.png'
import { ButtonIcon } from '../../Components/ButtonIcon'
import { Background } from '../../Components/Background';

export function SignIn() {

  const navigation = useNavigation();

  function handleSignIn(){
    navigation.navigate('Home');
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
        <ButtonIcon 
          title="Entrar com discord"  
          onPress={handleSignIn}
        />
      </View>
    </View>
    </Background>
  );
}

