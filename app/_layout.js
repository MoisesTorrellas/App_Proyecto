import { useEffect } from "react";
import { Slot, useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ThemeProvider } from "../hooks/useTheme";

function RootLayoutContent() {


export default function RootLayout() {
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
        //ENVOLVEMOS LA APP CON EL PROVEEDOR DEL TEMA
        <ThemeProvider> 
            <RootLayoutContent />
        </ThemeProvider>
    );
}
