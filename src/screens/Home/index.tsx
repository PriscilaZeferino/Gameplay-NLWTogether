import React, {useState} from 'react';
import { View, Text, FlatList } from 'react-native';

import { ButtonAdd } from '../../Components/ButtonAdd';
import { CategorySelect } from '../../Components/CategorySelect';
import { ListHeader } from '../../Components/ListHeader';
import { Profile } from '../../Components/Profile';
import {Appointment} from '../../Components/Appointment'
import { ListDivider } from '../../Components/ListDivider';

import { styles } from './styles';
import { Background } from '../../Components/Background';
import { useNavigation } from '@react-navigation/native';

export function Home ()
{

    const [category, setCategory] = useState('')

    const appoinments = [
        {
            id: '1',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 as 20:40h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
        },
        {
            id: '2',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 as 20:40h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
        }
    ]

    const navigation =  useNavigation();

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId)
    }

    function handleAppointmentDetails () {
        navigation.navigate('AppointmentDetails')
    }

    function handleAppointmentCreate () {
        navigation.navigate('AppointmentCreate')
    }
    return(
        <Background>
            <View style={styles.header} accessible={true}>
                <Profile/>
                <ButtonAdd 
                    onPress={handleAppointmentCreate}
                    accessibilityLabel="Agendar Nova Partida"
                    onAccessibilityAction={handleAppointmentCreate}
                

                />
            </View>
            <View>
                <CategorySelect
                    categorySelected={category}
                    setCategory={handleCategorySelect}
                />

                <View style={styles.content}>
                    <ListHeader
                        title="Partidas Agendadas"
                        subtitle="Total 6"
                    />

                    <FlatList
                        data={appoinments}
                        keyExtractor={item => item.id}
                        renderItem={({item}) =>
                            <Appointment data={item}
                                onPress={handleAppointmentDetails}
                            />                            
                        }
                        ItemSeparatorComponent={() => <ListDivider/>}
                        style={styles.matches}
                        showsVerticalScrollIndicator={false}
                    />

                </View>

            </View>
        </Background>
    )
}