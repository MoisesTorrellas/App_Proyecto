import { useState, useEffect } from 'react';

export default function useUsers() {
    const [usuarios, setUsuarios] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const obtenerUsuarios = async () => {
            try {
                const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
                const datos = await respuesta.json();
                setUsuarios(datos);
            } catch (err) {
                setError("Error al obtener los usuarios");
            }
        };

        obtenerUsuarios();
    }, []);

    // retornamos los datos y estados
    return { usuarios, error };
}
