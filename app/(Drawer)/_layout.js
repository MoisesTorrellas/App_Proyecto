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
    const activeBgColor = isDarkMode ? '#333333' : 'none'; 
    const statusBarStyle = isDarkMode ? 'light' : 'dark'; 
    
    return (
        <SafeAreaProvider>
            <StatusBar style={statusBarStyle} backgroundColor={headerBgColor} /> 
            
            <Drawer
                drawerContent={(props) => <CustomDrawer {...props} />}
                screenOptions={{
                    headerStyle: { 
                        backgroundColor: headerBgColor,
                    },
                    headerTintColor: headerTintColor,

                    drawerContentStyle: {
                        backgroundColor: isDarkMode ? '#121212' : '#FFFFFF', 
                    },
                    drawerActiveTintColor: isDarkMode ? '#00A8FF' : '#0041F2', 
                    drawerInactiveTintColor: isDarkMode ? '#BBBBBB' : '#2A2E35', 
                    drawerActiveBackgroundColor: activeBgColor, 

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

    );
}
