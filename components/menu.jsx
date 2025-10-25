import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { View, Text, StyleSheet, Image } from "react-native";
import { useTheme } from '../hooks/useTheme'; // Asume esta ruta para tu hook de tema

const img = require('../assets/usuario.png');

export default function CustomDrawer(props) {
    const { isDarkMode } = useTheme(); // Consume el estado del tema
    
    // Define los colores dinámicos
    const headerBackgroundColor = isDarkMode ? "#333333" : "#0041F2";
    const nameTextColor = isDarkMode ? "white" : "white"; // Se mantiene blanco para buen contraste

    const drawerStyles = StyleSheet.create({
        // Sobrescribe el estilo del encabezado con el color dinámico
        headerDynamic: {
            backgroundColor: headerBackgroundColor,
        },
        // Sobrescribe el estilo del texto del nombre con el color dinámico
        nameDynamic: {
            color: nameTextColor,
        },
        // Define el estilo del contenedor principal (opcional, para el fondo completo del Drawer)
        contentContainerDynamic: {
            backgroundColor: isDarkMode ? "#1A1A1A" : "#FFFFFF",
        },
    });

    return (
        <DrawerContentScrollView 
            {...props} 
            contentContainerStyle={[styles.contentContainer, drawerStyles.contentContainerDynamic]}
        >
            <View style={[styles.header, drawerStyles.headerDynamic]}>
    return (
        <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
            {/* Header */}
            
            <View style={styles.header}>
                <Image
                    source={img}
                    style={styles.avatar}
                />
                <Text style={[styles.name, drawerStyles.nameDynamic]}>Moises Torrellas</Text>
            </View>

            <DrawerItemList
                {...props}
                itemStyle={styles.itemStyle}
                labelStyle={[styles.labelStyle, { color: isDarkMode ? 'white' : 'black' }]}
                <Text style={styles.name}>Moises Torrellas</Text>
            </View>

            {/* Botones del Drawer */}
            <DrawerItemList
                {...props}
                itemStyle={styles.itemStyle}
                labelStyle={styles.labelStyle}
            />
        </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({
    header: {

        backgroundColor: "#0041F2",
        padding: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 10,
    },
    name: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
    itemStyle: {
        marginVertical: 5,
    },
    labelStyle: {
        fontSize: 16,
    },
    contentContainer: {
        flex: 1,
    }
});
});

