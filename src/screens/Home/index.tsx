import React, {useState, useCallback} from 'react';
import { View, Text, FlatList } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage'

import { ButtonAdd } from '../../Components/ButtonAdd';
import { CategorySelect } from '../../Components/CategorySelect';
import { ListHeader } from '../../Components/ListHeader';
import { Profile } from '../../Components/Profile';
import {Appointment, AppointmentProps} from '../../Components/Appointment'
import { ListDivider } from '../../Components/ListDivider';

import { styles } from './styles';
import { Background } from '../../Components/Background';
import { COLLECTION_APPOINTMENTS } from '../../configs/database';
import { Load } from '../../Components/Load';

import { useNavigation, useFocusEffect} from '@react-navigation/native';


export function Home ()
{
    const [category, setCategory] = useState('');
    const[loading, setLoading] = useState(true);
    const [appointments, setAppointments] = useState<AppointmentProps[]>([]);

    const navigation =  useNavigation();

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }

    function handleAppointmentDetails (guildSelected: AppointmentProps) {
        navigation.navigate('AppointmentDetails', {guildSelected})
    }

    function handleAppointmentCreate () {
        navigation.navigate('AppointmentCreate')
    }

    async function loadAppointments()
    {
        const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);

        const storage: AppointmentProps[] = response ? JSON.parse(response) : [];  
        
        if(category)
        {
            setAppointments(storage.filter(item => item.category === category));
        }
        else
        {
            setAppointments(storage);
        }

        setLoading(false);
    }

    useFocusEffect(useCallback(() =>{
        loadAppointments()
    },[category]))

    return(
        <Background>
            <View style={styles.header} accessible={true}>
                <Profile/>
                <ButtonAdd 
                    onPress={handleAppointmentCreate}
                    accessibilityLabel="Agendar Nova Partida"                

                />
            </View>
            <View>
                <CategorySelect
                        categorySelected={category}
                        setCategory={handleCategorySelect}
                /> 
            </View>

                { loading ? <Load/> :
                    <>
                    <ListHeader
                    title="Partidas Agendadas"
                    subtitle={`Total ${appointments.length}`}
                />

                    <FlatList
                        data={appointments}
                        keyExtractor={item => item.id}
                        renderItem={({item}) =>
                            <Appointment data={item}
                                onPress={() => handleAppointmentDetails(item)}
                            />                            
                        }
                        ItemSeparatorComponent={() => <ListDivider/>}
                        style={styles.matches}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{paddingBottom: 69}}
                    />
                    </>
                    }

        </Background>
    )
}