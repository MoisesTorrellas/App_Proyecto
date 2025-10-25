import { Text, StyleSheet } from "react-native";
import { useTheme } from "../hooks/useTheme";

export default function Titulo({ title, color }) {
    const { isDarkMode } = useTheme();

    const textColor = color 
        ? color 
        : isDarkMode 
            ? 'transparent'
            : '#3A4750';

    return (
        <Text style={[styles.title, { color: textColor }]}>
            {title}
        </Text>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 28,
        fontWeight: "bold",
        textAlign: "right",
        marginVertical: 10,
    },
});

