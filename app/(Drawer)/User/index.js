import Div from '../../../components/div';
import Screen from '../../../components/screen';
import Titulo from '../../../components/titulo';
import Boton from '../../../components/boton';
import Buscador from '../../../components/buscador';
import Tabla from '../../../components/tabla';
import { useState } from "react";
import ModalCustom from '../../../components/modal';
import Input from '../../../components/input';
import { validarCamposUsuario } from '../../../utils/validacionesUser';
import Toast from 'react-native-toast-message'

export default function GestionarUsuarios() {
    const [modalVisible, setModalVisible] = useState(false);

    const [cedula, setCedula] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [telefono, setTelefono] = useState('');
    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [rol, setRol] = useState('');

    const encabezados = ['Cédula', 'Nombre', 'Teléfono', 'Correo', 'Rol', 'Acciones'];
    const datos = [
        ['1', 'Juan', '0414-1234567', 'juan@email.com', 'Admin', '✏️ 🗑️'],
        ['2', 'María', '0424-6543210', 'maria@email.com', 'Usuario', '✏️ 🗑️'],
        ['3', 'Carlos', '0412-9876543', 'carlos@email.com', 'Moderador', '✏️ 🗑️'],
        ['4', 'Ana', '0416-3217890', 'ana@email.com', 'Usuario', '✏️ 🗑️'],
        ['1', 'Juan', '0414-1234567', 'juan@email.com', 'Admin', '✏️ 🗑️'],
        ['2', 'María', '0424-6543210', 'maria@email.com', 'Usuario', '✏️ 🗑️'],
        ['3', 'Carlos', '0412-9876543', 'carlos@email.com', 'Moderador', '✏️ 🗑️'],
        ['4', 'Ana', '0416-3217890', 'ana@email.com', 'Usuario', '✏️ 🗑️'],
    ];
    const anchoColumnas = [80, 100, 110, 150, 80, 90];

    return (
        <Screen>
            <Div>
                <Titulo title={'Gestinar Usuarios'}></Titulo>
            </Div>
            <Div>
                <Boton title={'Nuevo Usuario'} onPress={() => setModalVisible(true)}></Boton>
                <Boton title={'Generar Reporte'} colorFondo='#3A4750'></Boton>
            </Div>
            <Div>
                <Buscador placeholder='Buscar Usuario'></Buscador>
            </Div>
            <Div>
                <Tabla encabezados={encabezados} datos={datos} anchoColumnas={anchoColumnas}></Tabla>
            </Div>

            <ModalCustom title={'Registrar Usuario'} visible={modalVisible} onClose={() => setModalVisible(false)} onSutmit={() => {
                if (validarCamposUsuario(cedula, nombre, apellido, telefono, correo, contrasena, rol)) {
                    setModalVisible(false);
                    Toast.show({
                        type: 'success',
                        text1: 'Datos válidos',
                        text2: 'Los datos fueron enviados correctamente.'
                    });
                }
            }}>
                <Input label='Cedula' placeholder={'Ej: 12345678'} value={cedula} onChangeText={setCedula}></Input>
                <Input label='Nombre' placeholder={'Ej: Carlos'} value={nombre} onChangeText={setNombre}></Input>
                <Input label='Apellido' placeholder={'Ej: Perez'} value={apellido} onChangeText={setApellido}></Input>
                <Input label='Telefono' placeholder={'Ej: 0424-0000000'} value={telefono} onChangeText={setTelefono}></Input>
                <Input label='Correo' placeholder={'Ej: carlos@mail.com'} value={correo} onChangeText={setCorreo}></Input>
                <Input label='Contraseña' placeholder={'Ej: Aeiou123$'} value={contrasena} onChangeText={setContrasena} secureTextEntry={true}></Input>
                <Input label='Rol' placeholder={'Ej: Administrador'} value={rol} onChangeText={setRol}></Input>
            </ModalCustom>
        </Screen>
    );
}
