import { Text } from 'react-native';
import Screen from '../../../components/screen';
import Boton from '../../../components/boton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import {useTheme} from '../../../hooks/useTheme';

export default function Ajustes() {
    const router = useRouter();
    const { isDarkMode, toggleTheme } = useTheme();

export default function Ajustes() {
    const router = useRouter();
    const cerrar = async () => {
        await AsyncStorage.removeItem("userToken");
        router.replace("/(auth)/login");
    }
    const backgroundStyle = { backgroundColor: isDarkMode ? '#222222' : '#f0f0f0' };
        const textStyle = { color: isDarkMode ? '#fff' : '#000' };
    return (
        // Aplicar el estilo de fondo al Screen (o a un View que lo envuelva)
        <Screen> 
            <Text>¡Bienvenido a Ajustes!</Text>
            
            {/* BOTÓN MODO OSCURO */}
            <Boton 
                title={isDarkMode ? 'Desactivar Modo Oscuro ☀️' : 'Activar Modo Oscuro 🌙'} 
                onPress={toggleTheme} // 👈 LLAMA A LA FUNCIÓN GLOBAL DEL HOOK
                colorFondo={isDarkMode ? '#555' : '#0041F2'} 
            />

            <Screen>
                <Boton title={'Cerrar Sesión'} onPress={cerrar} />
            </Screen>
    return (
        <Screen>
            <Text>¡Bienvenido a Ajustes!</Text>
            <Boton title={'Cerrar Sesión'} onPress={cerrar}></Boton>
        </Screen>
    );
}
