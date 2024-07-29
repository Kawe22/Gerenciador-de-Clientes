import React from 'react';
import axios from 'axios';

function DeleteCliente({ id, onSuccess }) {
    const handleDelete = () => {
        if (window.confirm('Tem certeza que deseja excluir este cliente?')) {
            axios.delete(`http://localhost:5000/api/clients/${id}`)
                .then(() => {
                    alert('Cliente excluído com sucesso!');
                    onSuccess();
                })
                .catch(error => {
                    console.error('Erro ao excluir cliente', error);
                });
        }
    };

    return (
        <button onClick={handleDelete} className='delete_button'>Excluir Cliente</button>
    );
}

export default DeleteCliente;

