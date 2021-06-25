import React, {ReactNode} from 'react';
import { TouchableOpacityProps, TouchableOpacity} from 'react-native';
import { Text, Image, View } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import DiscordImg from '../../assets/discord.png';
import { styles } from './styles';

type Props = RectButtonProps & TouchableOpacityProps&{
  title: string;
}

export function ButtonIcon({ title, ...rest } : Props){
  return(

    <RectButton 
      style={styles.container} 
      accessible={true}
      accessibilityRole="button"
      {...rest}
    >
      <View style={styles.iconWrapper}>
        <Image source={DiscordImg} style={styles.icon} accessibilityRole="image"/>
      </View>

      <Text style={styles.title} accessibilityRole="text">
        { title }
      </Text>
    </RectButton>    

  );
}