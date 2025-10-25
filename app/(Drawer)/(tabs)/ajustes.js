import { Text, View } from 'react-native';
import Screen from '../../../components/screen';
import Boton from '../../../components/boton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { useTheme } from '../../../hooks/useTheme';

export default function Ajustes() {
    const router = useRouter();
    const { isDarkMode, toggleTheme } = useTheme();

    const cerrar = async () => {
        await AsyncStorage.removeItem("userToken");
        router.replace("/(auth)/login");
    };

    const backgroundStyle = { backgroundColor: isDarkMode ? '#222222' : '#f0f0f0', flex: 1 };
    const textStyle = { color: isDarkMode ? '#fff' : '#000', fontSize: 16, marginBottom: 20 };

    return (
        <Screen style={backgroundStyle}>
            <Text style={textStyle}>¡Bienvenido a Ajustes!</Text>

            {/* BOTÓN MODO OSCURO */}
            <Boton
                title={isDarkMode ? 'Desactivar Modo Oscuro ☀️' : 'Activar Modo Oscuro 🌙'}
                onPress={toggleTheme}
                colorFondo={isDarkMode ? '#555' : '#0041F2'}
            />

            {/* BOTÓN CERRAR SESIÓN */}
            <Boton
                title={'Cerrar Sesión'}
                onPress={cerrar}
                colorFondo={isDarkMode ? '#880000' : '#FF3B30'}
            />
        </Screen>
    );
}