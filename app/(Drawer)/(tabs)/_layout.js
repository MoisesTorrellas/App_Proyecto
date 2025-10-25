import { Tabs } from "expo-router";
import { ChartBarSquareIcon, Cog6ToothIcon } from "react-native-heroicons/solid";
import { useTheme } from '../../../hooks/useTheme';

export default function TabsHome() {
    const { isDarkMode } = useTheme();
    const tabBarBgColor = isDarkMode ? '#1A1A1A' : '#ffffff';
    const activeColor = isDarkMode ? '#00A8FF' : '#0041F2';
    const inactiveColor = isDarkMode ? '#BBBBBB' : '#2A2E35';

    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    height: 65,
                    paddingBottom: 10,
                    paddingTop: 5,
                    backgroundColor: tabBarBgColor,
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
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Estadísticas",
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