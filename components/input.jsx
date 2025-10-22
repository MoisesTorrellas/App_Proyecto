import { TextInput, StyleSheet, View, Text } from "react-native";

export default function Input({ placeholder = "", value, onChangeText, label = "", secureTextEntry = false }) {
    return (
        <View style={styles.contentImput}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.container}>
                <TextInput style={styles.input} placeholder={placeholder} placeholderTextColor="#888888ff" value={value} onChangeText={onChangeText} secureTextEntry={secureTextEntry}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    contentImput:{
        marginTop:12,
    },
    container: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 2,
        borderColor: "#b6b6b6ff",
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 6,
        marginVertical: 10,
        width: "90%",
    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: "#2A2E35",
    },
    label:{
        fontSize: 16,
        fontWeight: "bold",
        color: "#3A4750",
        marginLeft:10,
    }
});
