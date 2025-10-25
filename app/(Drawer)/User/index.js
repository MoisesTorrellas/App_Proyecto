import { FlatList } from 'react-native';
import {useRouter} from 'expo-router';


import DivRow from '../../../components/divRow';
import DivColumn from '../../../components/divColumn';
import Screen from '../../../components/screen';
import Titulo from '../../../components/titulo';
import Boton from '../../../components/boton';
import Buscador from '../../../components/buscador';
import CardConsulta from '../../../components/cardConsulta';

import useUsuarios from '../../../hooks/useUsers';

export default function GestionarUsuarios() {
    const router = useRouter();
    const { usuarios, error } = useUsuarios();

    const form = () => {
        router.push('/(forms)/formUsuarios'); 
    };

    return (
        <Screen>
            <DivRow>
                <Titulo title={'Gestinar Usuarios'}></Titulo>
            </DivRow>
            <DivRow>
                <Boton title={'Nuevo Usuario'} width={"70%"} fontSize={15} onPress={form}></Boton>

            </DivRow>
            <DivRow>
                <Buscador placeholder='Buscar Usuario'></Buscador>
            </DivRow>
            <DivColumn>
                <FlatList
                    data={usuarios}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <CardConsulta nombre={item.name} cedula={item.email} rol={item.username} />
                    )}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                />
            </DivColumn>
        </Screen>
    );
}
