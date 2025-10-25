import { useEffect } from "react";
import { Slot, useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ThemeProvider } from "../hooks/useTheme";

function RootLayoutContent() {
    const router = useRouter();

    useEffect(() => {
        const checkLogin = async () => {
            const token = await AsyncStorage.getItem("userToken");

            if (token) {
                router.replace("/(Drawer)/(tabs)");
            } else {
                router.replace("/(auth)/login");
            }
        };

        checkLogin();
    }, []);

    return <Slot />;
}

export default function RootLayout() {
    return (
        // Envolvemos toda la app con el proveedor del tema
        <ThemeProvider>
            <RootLayoutContent />
        </ThemeProvider>
    );
}
