import { TextInput, StyleSheet, View } from "react-native";
import { MagnifyingGlassIcon } from "react-native-heroicons/solid";

export default function Buscador({
    placeholder = "Buscar...",
    value,
    onChangeText,
    backgroundColor = "#ffff",
    borderColor = "#3A4750",
}) {
    return (
        <View style={[styles.container, { backgroundColor, borderColor }]}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                placeholderTextColor="#3A4750"
                value={value}
                onChangeText={onChangeText}
            />
            <MagnifyingGlassIcon color="#3A4750" size={20} style={styles.icon} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 2,
        borderColor: "#b6b6b6ff",
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 6,
        marginVertical: 10,
        width: 300,
    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: "#2A2E35",
    },
});
