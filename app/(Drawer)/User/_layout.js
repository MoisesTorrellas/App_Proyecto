import { Tabs } from "expo-router";
import { UserIcon, UsersIcon, ExclamationCircleIcon } from "react-native-heroicons/solid";
import { useTheme } from '../../../hooks/useTheme';

export default function TabsUser() {
    const { isDarkMode } = useTheme();
    const tabBarBgColor = isDarkMode ? '#1A1A1A' : '#ffffff';
    const activeColor = isDarkMode ? '#00A8FF' : '#0041F2';
    const inactiveColor = isDarkMode ? '#BBBBBB' : '#2A2E35';


export default function TabsUser() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    height: 65,
                    paddingBottom: 10,
                    paddingTop: 5,
                    backgroundColor: tabBarBgColor, 
                    height: 65, // altura de la barra inferior
                    paddingBottom: 10, // espacio inferior para que no quede pegado
                    paddingTop: 5,
                    backgroundColor: '#ffffff',
                    borderColor: 'none',
                    borderTopColor: 'none',
                    borderTopWidth: 0,
                    elevation: 0,
                    shadowOpacity: 0,
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: "600",
                },
                tabBarActiveTintColor: activeColor,
                tabBarInactiveTintColor: inactiveColor,
                    fontSize: 12, // tamaño de letra del label
                    fontWeight: "600",
        
                },
                tabBarActiveTintColor: '#0041F2',
                tabBarInactiveTintColor: '#2A2E35',
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Usuarios",
                    tabBarIcon: ({ focused }) => (
                        <UserIcon color={focused ? activeColor : inactiveColor} size={24} />
                    tabBarIcon: ({ color }) => (
                        <UserIcon color={color} size={24} />
                    ),
                }}
            />
            <Tabs.Screen
                name="gestionarRoles"
                options={{
                    title: "Roles",
                    tabBarIcon: ({ focused }) => (
                        <UsersIcon color={focused ? activeColor : inactiveColor} size={24} />
                    tabBarIcon: ({ color }) => (
                        <UsersIcon color={color} size={24} />
                    ),
                }}
            />
            <Tabs.Screen
                name="gestionarPermisos"
                options={{
                    title: "Permisos",
                    tabBarIcon: ({ focused }) => (
                        <ExclamationCircleIcon color={focused ? activeColor : inactiveColor} size={24} />
                    ),
                }}
            />
            {/* Si tienes la ruta 'registrar' en esta carpeta y necesitas ocultarla: */}
            <Tabs.Screen
                name="registrar" 
                options={{
                    tabBarButton: () => null, 
                }}
            />
        </Tabs>
    );
}
                    tabBarIcon: ({ color }) => (
                        <ExclamationCircleIcon color={color} size={24} />
                    ),
                }}
            />
        </Tabs>
    );
}
