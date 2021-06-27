import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';
import { useAuth } from '../../hooks/auth';

const {colorScheme} = useAuth();

export const styles = StyleSheet.create({
    container: {
        width: '78%',
        height: 1,
        backgroundColor: `theme.${colorScheme}.colors.secondary40`,
        alignSelf: 'flex-end'
    }
})