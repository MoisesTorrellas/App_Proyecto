import { Drawer } from "expo-router/drawer";
import CustomDrawer from "../../components/menu";
import { HomeIcon, UserGroupIcon } from "react-native-heroicons/solid";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Toast from "react-native-toast-message";
import { useTheme } from '../../hooks/useTheme';

export default function Layout() {
    const { isDarkMode } = useTheme();

    const headerBgColor = isDarkMode ? '#1A1A1A' : '#FFFFFF';
    const headerTintColor = isDarkMode ? '#F0F0F0' : '#2A2E35';
    const drawerBgColor = isDarkMode ? '#121212' : '#FFFFFF';
    const activeBgColor = isDarkMode ? '#333333' : 'none';
    const activeTintColor = isDarkMode ? '#00A8FF' : '#0041F2';
    const inactiveTintColor = isDarkMode ? '#BBBBBB' : '#2A2E35';
    const statusBarStyle = isDarkMode ? 'light' : 'dark';

    return (
        <SafeAreaProvider>
            <StatusBar style={statusBarStyle} backgroundColor={headerBgColor} />
            
            <Drawer
                drawerContent={(props) => <CustomDrawer {...props} />}
                screenOptions={{
                    headerStyle: { backgroundColor: headerBgColor },
                    headerTintColor,
                    drawerContentStyle: { backgroundColor: drawerBgColor },
                    drawerActiveTintColor: activeTintColor,
                    drawerInactiveTintColor: inactiveTintColor,
                    drawerActiveBackgroundColor: activeBgColor,
                    drawerLabelStyle: {
                        fontSize: 16,
                        fontWeight: "bold",
                    },
                    drawerItemStyle: {
                        borderRadius: 10,
                        margin: 8,
                    },
                }}
            >
                <Drawer.Screen
                    name="(tabs)"
                    options={{
                        title: "Página Principal",
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