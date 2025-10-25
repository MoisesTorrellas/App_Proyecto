import { View, Text, StyleSheet, } from "react-native";

export default function CardConsulta({ nombre, cedula, rol }) {
    return (
        <View style={styles.card}>
            <View>
                <Text style={styles.nombre}>{nombre}</Text>
                <Text style={styles.cedula}>{cedula}</Text>
            </View>
            <View>
                <Text style={styles.rol}>{rol}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#ffffff',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.20)',
        width: '85%',
        height: 80,
        borderRadius: 10,
        padding: 15,
        marginVertical: 10,
        justifyContent: 'center',
        borderLeftWidth: 20,
        borderLeftColor: '#0041F2',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    nombre: {
        color: '#000000',
        fontSize: 15,
        fontWeight: "700",
    },
    cedula: {
        color: '#555555',
        fontSize: 12,
        fontWeight: "700",
    },
    rol: {
        color: '#737373ff',
        fontSize: 10,
        fontWeight: "700",
    }
})