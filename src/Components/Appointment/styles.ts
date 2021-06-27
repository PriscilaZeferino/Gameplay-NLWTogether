import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';
import { useAuth } from '../../hooks/auth';

const {colorScheme} = useAuth();

export const styles = StyleSheet.create({ 

    container: {
        width: '100%',
        flexDirection: 'row',
        alignSelf: 'center'
    },
    content: {
        flex: 1
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    title: {
        fontFamily: `theme.${colorScheme}.fonts.title700`,
        color: `theme.${colorScheme}.colors.heading`,
        fontSize: 18
    },
    category: {
        fontFamily: `theme.${colorScheme}.fonts.text400`,
        color: `theme.${colorScheme}.colors.highlight`,
        fontSize: 13,
        marginRight: 24
    },
    footer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    dateInfo: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    playersInfo: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    date: {
        fontFamily: `theme.${colorScheme}.fonts.text500`,
        color: `theme.${colorScheme}.colors.heading`,
        fontSize: 13,
        marginLeft: 7,
    },
    player: {
        fontFamily: `theme.${colorScheme}.fonts.text500`,
        fontSize: 13,
        marginLeft: 7,
        marginRight: 24,
    },
    guildIconContainer: {
        height: 68,
        width: 64,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 20 
    }
})