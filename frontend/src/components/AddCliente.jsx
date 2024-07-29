import React, { useState } from 'react';
import axios from 'axios';

function AddCliente() {
    const [cliente, setCliente] = useState({
        name: '',
        email: '',
        phone: '',
        address: ''
    });

    const handleChange = (e) => {
        setCliente({ ...cliente, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/clients', cliente)
            .then(() => {
                alert('Cliente adicionado com sucesso!');
            })
            .catch(error => {
                console.error('Erro ao adicionar cliente', error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Adicionar Cliente</h2>
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
            <button type="submit">Adicionar</button>
        </form>
    );
}

export default AddCliente;
