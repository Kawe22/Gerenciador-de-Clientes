import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import ClienteList from './components/ClientList/ClienteList';
import AddCliente from './components/AddCliente';
import EditCliente from './components/EditCliente';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Gerenciamento de Clientes</h1>
          <nav>
            <NavLink exact to="/" activeClassName="active">Lista de Clientes</NavLink>
            <NavLink to="/add" activeClassName="active">Adicionar Cliente</NavLink>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<ClienteList />} />
          <Route path="/add" element={<AddCliente />} />
          <Route path="/edit/:id" element={<EditCliente />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
