import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function EditCliente() {
    const { id } = useParams();
    const [cliente, setCliente] = useState({
        name: '',
        email: '',
        phone: '',
        address: ''
    });

    useEffect(() => {
        // Chamada para obter os detalhes do cliente pelo ID
        axios.get(`http://localhost:5000/api/clients/${id}`)
            .then(response => {
                setCliente(response.data); 
            })
            .catch(error => {
                console.error('Erro ao buscar dados do cliente', error);
            });
    }, [id]); // Dependência [id] para reagir às mudanças de ID

    const handleChange = (e) => {
        // Atualiza o estado com os valores dos inputs do formulário
        setCliente({ ...cliente, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); 
        axios.put(`http://localhost:5000/api/clients/${id}`, {
            name: cliente.name,
            email: cliente.email,
            phone: cliente.phone,
            address: cliente.address
          })
          .then(response => {
            console.log('Atualização realizada com sucesso', response.data);
            alert('Cliente atualizado com sucesso!');
          })
          .catch(error => {
            console.error('Erro ao atualizar cliente:', error.response);
            alert('Falha ao atualizar o cliente: ' + error.response.data.message);
          });
          
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Editar Cliente</h2>
            <label>
                Nome:
                <input type="text" name="name" value={cliente.name} onChange={handleChange} />
            </label>
            <label>
                Email:
                <input type="email" name="email" value={cliente.email} onChange={handleChange} />
            </label>
            <label>
                Telefone:
                <input type="text" name="phone" value={cliente.phone} onChange={handleChange} />
            </label>
            <label>
                Endereço:
                <input type="text" name="address" value={cliente.address} onChange={handleChange} />
            </label>
            <button type="submit">Atualizar</button>
        </form>
    );
}

export default EditCliente;
