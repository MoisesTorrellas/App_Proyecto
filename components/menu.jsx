import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { View, Text, StyleSheet, Image } from "react-native";

const img = require('../assets/usuario.png');

export default function CustomDrawer(props) {
    return (
        <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
            {/* Header */}
            <View style={styles.header}>
                <Image
                    source={img}
                    style={styles.avatar}
                />
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
        backgroundColor: "#0a1e33",
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
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
