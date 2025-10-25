import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { View, Text, StyleSheet, Image } from "react-native";
import { useTheme } from "../hooks/useTheme";

const img = require("../assets/usuario.png");

export default function CustomDrawer(props) {
    const { isDarkMode } = useTheme();

    // Colores dinámicos según el modo
    const headerBackgroundColor = isDarkMode ? "#333333" : "#0041F2";
    const nameTextColor = "white";
    const drawerBackgroundColor = isDarkMode ? "#1A1A1A" : "#FFFFFF";

    return (
        <DrawerContentScrollView
            {...props}
            contentContainerStyle={[styles.contentContainer, { backgroundColor: drawerBackgroundColor }]}
        >
            {/* Header del Drawer */}
            <View style={[styles.header, { backgroundColor: headerBackgroundColor }]}>
                <Image source={img} style={styles.avatar} />
                <Text style={[styles.name, { color: nameTextColor }]}>Moises Torrellas</Text>
            </View>

            {/* Lista de opciones del Drawer */}
            <DrawerItemList
                {...props}
                itemStyle={styles.itemStyle}
                labelStyle={[styles.labelStyle, { color: isDarkMode ? "white" : "black" }]}
            />
        </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
    },
    header: {
        backgroundColor: "#0041F2",
        padding: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        marginBottom: 10,
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
});
