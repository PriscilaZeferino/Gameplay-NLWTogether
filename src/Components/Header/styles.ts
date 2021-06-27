import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { theme } from "../../global/styles/theme";
import { useAuth } from "../../hooks/auth";

const {colorScheme} = useAuth()

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 104, 
        paddingTop: getStatusBarHeight(),
        paddingHorizontal: 24,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        flex: 1,
        textAlign: "center",
        fontFamily: `theme.${colorScheme}.fonts.title700`,
        fontSize: 20,
        color: `theme.${colorScheme}.colors.heading`
    }
})