
import React, { useState } from 'react';
import { View, StyleSheet, ScrollView} from 'react-native';
import DivRow from '../../components/divRow.jsx'; 
import DivColumn from '../../components/divColumn.jsx'; 
import Screen from '../../components/screen.jsx';
import Titulo from '../../components/titulo.jsx';
import Boton from '../../components/boton.jsx';
import Input from '../../components/input.jsx';
import Toast from 'react-native-toast-message';
import {validarCamposUsuario} from '../../util/validacionesUser';
import { useRouter } from 'expo-router'; 

export default function RegistrarUsuarioScreen() {
  const router = useRouter(); // Inicializa el hook de router

  // Mueve el estado de los inputs aquí
  const [cedula, setCedula] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [rol, setRol] = useState('');

  const handleGuardarUsuario = () => {
    if (validarCamposUsuario(cedula, nombre, apellido, telefono, correo, contrasena, rol)) {
      Toast.show({
        type: 'success',
        text1: 'Datos válidos',
        text2: 'Los datos fueron enviados correctamente.'
      });
      router.back(); 
    } else {
    }
  };

  return (
    <ScrollView>
    <Screen>
      <DivRow>
        <Titulo title={'Registrar Nuevo Usuario'}></Titulo>
      </DivRow>
      
      <View style={styles.card}>
            
            <View style={styles.formContainer}>
                <Input label='Cedula' placeholder={'Ej: 12345678'} value={cedula} onChangeText={setCedula}></Input>
                <Input label='Nombre' placeholder={'Ej: Carlos'} value={nombre} onChangeText={setNombre}></Input>
                <Input label='Apellido' placeholder={'Ej: Perez'} value={apellido} onChangeText={setApellido}></Input>
                <Input label='Telefono' placeholder={'Ej: 0424-0000000'} value={telefono} onChangeText={setTelefono}></Input>
                <Input label='Correo' placeholder={'Ej: carlos@mail.com'} value={correo} onChangeText={setCorreo}></Input>
                <Input label='Contraseña' placeholder={'Ej: Aeiou123$'} value={contrasena} onChangeText={setContrasena} secureTextEntry={true}></Input>
                <Input label='Rol' placeholder={'Ej: Administrador'} value={rol} onChangeText={setRol}></Input>
            </View>
            
            <View style={styles.buttonGroup}>
                {/* Botón de Guardar */}
                <Boton 
                    title={'Guardar Usuario'} 
                    onPress={handleGuardarUsuario} 
                    style={styles.saveButton}
                />
                
                {/* Botón de Cancelar para volver */}
                <Boton 
                    title={'Cancelar'} 
                    colorFondo='#ccc' 
                    onPress={() => router.back()}
                    style={styles.cancelButton}
                />
            </View>
            
        </View>
    </Screen>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 8,
        margin: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    formContainer: {
        padding: 0,
    },
    buttonGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
    },
    saveButton: {
        flex: 1,
        marginRight: 10,
    },
    cancelButton: {
        flex: 1,
        marginLeft: 10,
    }
});