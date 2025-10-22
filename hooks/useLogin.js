import { useState } from "react";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function useLogin() {
    const [usuario, setUsuario] = useState("");
    const [clave, setClave] = useState("");
    const router = useRouter();

    const handleLogin = async () => {
        if (usuario === "admin" && clave === "1234") {
            await AsyncStorage.setItem("userToken", "ok");
            router.replace("/(Drawer)/(tabs)");
        } else {
            alert("Credenciales incorrectas");
        }
    };

    return {
        usuario,
        setUsuario,
        clave,
        setClave,
        handleLogin,
    };
}