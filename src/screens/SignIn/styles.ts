import { StyleSheet} from "react-native";
import { theme } from "../../global/styles/theme";
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        // backgroundColor: theme.colors.secondary100
    },
    image: {
        width: '100%',
        height: 360
    },
    content: {
        marginTop: -80,
        paddingHorizontal: 50,
    },
    title: {
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading,
        textAlign: "center",
        fontSize: 40,
        marginBottom: 16,
        lineHeight: 40
    },
    subtitle: {
        fontFamily: theme.fonts.title500,
        color: theme.colors.heading,
        fontSize: 15,
        textAlign: "center",
        marginBottom: 64,
        lineHeight: 25
    }
});