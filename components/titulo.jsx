import { Text, StyleSheet } from "react-native";
import { useTheme } from '../hooks/useTheme';

export default function Titulo({ title }) {
    const { isDarkMode } = useTheme();
    
    // 4. Definir el color dinámicamente
    const textColor = isDarkMode ? '#F0F0F0' : '#3A4750'; // Blanco suave o tu color original

    return (
        // 5. Aplicar el color dinámico al estilo
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