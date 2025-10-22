import { View, Text, StyleSheet } from "react-native";

import Input from "../../components/input";
import Boton from "../../components/boton";
import Screen from "../../components/screen";
import Logo from "../../components/logo";
import Titulo from "../../components/titulo";

import useLogin from "../../hooks/useLogin";

export default function Login() {
    const { usuario, setUsuario, clave, setClave, handleLogin } = useLogin();
    return (
        <Screen>
            <View style={styles.contenedorLogo}>
                <View>
                    <Logo style={styles.logo} />
                </View>
                <Text style={styles.titulo}>Nombre Del Negocio</Text>

            </View>
            <View style={styles.contenedorLogin}>
                <Titulo title={"Inicio De Sesión"} />
                <Text style={styles.subTitulo}>Hola, Bienvenido De Nuevo.</Text>
                <Input
                    placeholder="Usuario"
                    value={usuario}
                    onChangeText={setUsuario}
                    label="Usuario" />
                <Input
                    placeholder="Contraseña"
                    value={clave}
                    onChangeText={setClave}
                    label="Contraseña"
                    secureTextEntry={true} />
                <Boton title={"Iniciar Sesión"} onPress={handleLogin} width={'90%'} fontSize={16}/>
                <View style={{ marginTop: 40 }}>
                    <Text style={styles.subTitulo}>¿Has olvidado tu contraseña?</Text>
                </View>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    contenedorLogo: {
        width: '100%',
        height: '30%',
        backgroundColor: '#E0E3E7',
    },
    contenedorLogin: {
        backgroundColor: '#ffffff',
        width: '100%',
        height: '70%',
        paddingTop: 30,
        alignItems: 'center',
        borderRadius: 40,
        boxShadow: '0px -1px 50px rgba(0, 0, 0, 0.20)',
        padding: 20,
    },
    logo: {
        width: 150,
        height: 150,
        marginTop: 20,
        alignSelf: 'center',
    },
    titulo: {
        fontSize: 30,
        textAlign: 'center',
        color: '#0041F2',
        fontWeight: '700',
    },
    subTitulo: {
        color: '#696969',
        textAlign: 'center',
        fontWeight: '700',
    }
})