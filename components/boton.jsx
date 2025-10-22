import { Text, Pressable, StyleSheet } from "react-native";

export default function Boton({ onPress, title, colorFondo = "#0041F2", colorLetra = "#ffffff", colorPresionado = "#00258aff", width = 0, fontSize = 0 }) {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [
                styles.button,
                { backgroundColor: pressed ? colorPresionado : colorFondo, width: width === 0 ? 160 : width },
            ]}
        >
            <Text style={[styles.title, { color: colorLetra, fontSize: fontSize === 0 ? 12 : fontSize }]}>{title}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        padding: 15,
        width: 160,
        borderRadius: 10,
        margin: 5,
    },
    title: {
        fontSize: 12,
        fontWeight: "bold",
        textAlign: "center",
    },
});
