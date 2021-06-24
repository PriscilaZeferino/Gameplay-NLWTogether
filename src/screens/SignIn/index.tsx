import React from 'react';
import {StatusBar, Text, View, Image } from 'react-native';

import {styles} from './styles'

import IllustrationImg from '../../assets/illustration.png'
import { ButtonIcon } from '../../Components/ButtonComponent';
export function SignIn() {
  return (
    <View style={styles.container}  >
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent/>
      <Image source={IllustrationImg} style={styles.image} />
      <View style={styles.content} accessible={true} >
        <Text style={styles.title} accessibilityRole="text">Organize {'\n'} suas jogatinas {'\n'} facilmente</Text>
        <Text style={styles.subtitle} accessibilityRole="text">
          Crie grupos para jogar seus games {'\n'}
          favoritos com seus amigos
        </Text>
        <ButtonIcon title="Entrar com discord"  activeOpacity={0.7}/>
      </View>
    </View>
  );
}

