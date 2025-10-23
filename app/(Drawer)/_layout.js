import { Drawer } from "expo-router/drawer";
import CustomDrawer from "../../components/menu";
import { HomeIcon, UserGroupIcon } from "react-native-heroicons/solid";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Toast from "react-native-toast-message";

export default function Layout() {
    return (
        <SafeAreaProvider>
            <StatusBar barStyle='light-content' backgroundColor="#E0E3E7" />
            <Drawer
                drawerContent={(props) => <CustomDrawer {...props} />}
                screenOptions={{
                    headerStyle: { backgroundColor: "#fffff" },
                    drawerActiveTintColor: "#2A2E35",
                    drawerInactiveTintColor: "#2A2E35",
                    drawerActiveBackgroundColor: "none",
                    drawerActiveTintColor: "#0041F2",
                    headerTintColor: "#2A2E35",

                    drawerLabelStyle: {
                        fontSize: 16,
                        fontWeight: "bold",
                    },
                    drawerItemStyle: {
                        borderRadius: 10,
                        margin: 8
                    },

                }}
            >
                <Drawer.Screen
                    name="(tabs)"
                    options={{
                        title: "Pagina Principal",
                        drawerIcon: ({ color, size }) => (
                            <HomeIcon color={color} size={size} />
                        ),
                    }}
                />
                <Drawer.Screen
                    name="User"
                    options={{
                        title: "Administrar Usuarios",
                        drawerIcon: ({ color, size }) => (
                            <UserGroupIcon color={color} size={size} />
                        ),
                    }}
                />
            </Drawer>
            <Toast topOffset={60} />
        </SafeAreaProvider>

    );
}
