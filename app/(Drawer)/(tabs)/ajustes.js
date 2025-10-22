import { Text } from 'react-native';
import Screen from '../../../components/screen';
import Boton from '../../../components/boton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

export default function Ajustes() {
    const router = useRouter();
    const cerrar = async () => {
        await AsyncStorage.removeItem("userToken");
        router.replace("/(auth)/login");
    }
    return (
        <Screen>
            <Text>¡Bienvenido a Ajustes!</Text>
            <Boton title={'Cerrar Sesión'} onPress={cerrar}></Boton>
        </Screen>
    );
}
