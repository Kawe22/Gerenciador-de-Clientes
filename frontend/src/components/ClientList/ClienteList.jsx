import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DeleteCliente from '../DeleteCliente';
import './ClientList.css';

function ClienteList() {
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        fetchClientes();
    }, []);

    const fetchClientes = () => {
        axios.get('http://localhost:5000/api/clients')
            .then(response => setClientes(response.data))
            .catch(error => console.error('Erro ao buscar clientes', error));
    };

    const handleDeleteSuccess = (id) => {
        const updatedClientes = clientes.filter(cliente => cliente._id !== id);
        setClientes(updatedClientes);
    };

    return (
        <div>
            <h2>Lista de Clientes</h2>
            <ul>
                {clientes.map(cliente => (
                    <li key={cliente._id}>
                        <div className='client_text'>{cliente.name} - {cliente.email}</div>
                        <div>
                            <Link className='edit_button' to={`/edit/${cliente._id}`}>Editar</Link>
                            <DeleteCliente id={cliente._id} onSuccess={() => handleDeleteSuccess(cliente._id)} />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ClienteList;
