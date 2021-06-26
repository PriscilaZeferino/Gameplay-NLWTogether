import React from 'react';
import { View, FlatList } from 'react-native';

import { GuildProps } from '../../Components/Guild';
import { Guild } from '../../Components/Guild'

import { ListDivider } from '../../Components/ListDivider';

import { styles } from './styles';

type Props = {
  handleGuildSelect: (guild: GuildProps) => void;
}

export function Guilds ({handleGuildSelect} : Props){
  
    const guilds = [
        {
            id: '1',
            name: 'Lendários',
            icon: 'image.png',
            owner: true
        },
        {
            id: '2',
            name: 'Galera do Game',
            icon: 'image.png',
            owner: false
        },
        {
            id: '3',
            name: 'Lendários',
            icon: 'image.png',
            owner: true
        },
        {
            id: '4',
            name: 'Galera do Game',
            icon: 'image.png',
            owner: false
        },
        {
            id: '5',
            name: 'Lendários',
            icon: 'image.png',
            owner: true
        },
        {
            id: '6',
            name: 'Galera do Game',
            icon: 'image.png',
            owner: false
        }
    ]
    
    return(
        <View style={styles.container} 
            accessible={true}
        >
            <FlatList
                data={guilds}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <Guild
                        data={item}
                        onPress={() => handleGuildSelect(item)}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => <ListDivider isCentered/>}
                style={styles.guilds}
                contentContainerStyle={{paddingBottom: 68, paddingTop: 103}}
                ListHeaderComponent={() => <ListDivider isCentered/>}

            />
        </View>
    )
}
