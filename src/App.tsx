import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Cadastrar from './components/pages/Cadastrar';
import Contato from './components/pages/Contato';
import Home from './components/pages/Home';
import Dashboard from './components/pages/Dashboard';
import DashboardClientes from './components/pages/DashboardClientes';
import Update from './components/Update';
import Delete from './components/Delete';

function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/contato' element={<Contato/>} />
          <Route path='/cadastrar' element={<Cadastrar/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/dashboard/clientes' element={<DashboardClientes/>} />
          <Route path='/dashboard/clientes/atualizar' element={<Update/>} />
          <Route path='/dashboard/clientes/excluir' element={<Delete/>} />
        </Routes>
        <Footer />
      </Router>
  );
}

export default App;
