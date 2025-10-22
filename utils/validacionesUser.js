import Toast from 'react-native-toast-message';


export function validarCamposUsuario(cedula, nombre, apellido, telefono, correo, contrasena, rol) {
    // Validar campos vacíos
    if (!cedula || !nombre || !apellido || !telefono || !correo || !contrasena || !rol) {
        Toast.show({
            type: 'error',
            text1: 'Campos incompletos',
            text2: 'Todos los campos son obligatorios.'
        });
        return false;
    }

    // Validar cédula
    const cedulaE = /^\d{7,10}$/;
    if (!cedulaE.test(cedula)) {
        Toast.show({
            type: 'error',
            text1: 'Cédula inválida',
            text2: 'Debe contener solo números (7 a 10 dígitos).'
        });
        return false;
    }

    // Validar nombre
    const nombreE = /^[A-Za-zÀ-ÿ\s]{2,50}$/;
    if (!nombreE.test(nombre)) {
        Toast.show({
            type: 'error',
            text1: 'Nombre inválido',
            text2: 'Debe contener solo letras y tener entre 2 y 50 caracteres.'
        });
        return false;
    }

    // Validar apellido
    const apellidoE = /^[A-Za-zÀ-ÿ\s]{2,50}$/;
    if (!apellidoE.test(apellido)) {
        Toast.show({
            type: 'error',
            text1: 'Apellido inválido',
            text2: 'Debe contener solo letras y tener entre 2 y 50 caracteres.'
        });
        return false;
    }

    // Validar teléfono
    const telefonoE = /^(0412|0414|0424|0416|0426|0413)\d{7}$/;
    if (!telefonoE.test(telefono)) {
        Toast.show({
            type: 'error',
            text1: 'Teléfono inválido',
            text2: 'Debe tener formato como 04121234567.'
        });
        return false;
    }

    // Validar correo
    const emailE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailE.test(correo)) {
        Toast.show({
            type: 'error',
            text1: 'Correo inválido',
            text2: 'Por favor ingresa un correo electrónico válido.'
        });
        return false;
    }

    // Validar contraseña
    const contrasenaE = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!contrasenaE.test(contrasena)) {
        Toast.show({
            type: 'error',
            text1: 'Contraseña débil',
            text2: 'Debe tener 8+ caracteres, mayúscula, minúscula, número y símbolo.'
        });
        return false;
    }

    // Validar rol
    const rolE = /^(Admin|Usuario|Moderador)$/;
    if (!rolE.test(rol)) {
        Toast.show({
            type: 'error',
            text1: 'Rol inválido',
            text2: 'Debe ser Admin, Usuario o Moderador.'
        });
        return false;
    }
    return true;
}
