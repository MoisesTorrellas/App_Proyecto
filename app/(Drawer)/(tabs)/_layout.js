import { Tabs } from "expo-router";
import { ChartBarSquareIcon, Cog6ToothIcon } from "react-native-heroicons/solid";

export default function TabsHome() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
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
                    title: "Estadisticas",
                    tabBarIcon: ({ color }) => (
                        <ChartBarSquareIcon color={color} size={24} />
                    ),
                }}
            />
            <Tabs.Screen
                name="ajustes"
                options={{
                    title: "Ajustes",
                    tabBarIcon: ({ color }) => (
                        <Cog6ToothIcon color={color} size={24} />
                    ),
                }}
            />
        </Tabs>
    );
}
