import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import "./css/Update.css";

export default function Update() {
    const [Nome, setNome] = useState('');
    const [CPF, setCpf] = useState('');
    const [E_mail, setEmail] = useState('');
    const [Estado, setEstado] = useState('');
    const [id, setId] = useState('');
  
    console.log(Nome);
    console.log(CPF);
    console.log(E_mail);
    console.log(Estado);

    const sendDataToApi = () => {
        axios.put(`http://localhost:4000/cliente/${id}`, {
            id,
            Nome,
            CPF,
            E_mail,
            Estado
        }).catch(function (error) {
          if (error.response) {          
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
  
            alert(error.response.data);
  
          } else if (error.request) {
            console.log(error.request);
  
            alert("Erro ao conectar com o servidor");
  
          } else {
            console.log('Error', error.message);
  
            alert("Erro ao conectar com o servidor");
          }
        });
    }

    useEffect(() => {
        setId(localStorage.getItem("id") || "");
        setNome(localStorage.getItem("Nome") || "");
        setCpf(localStorage.getItem("CPF") || "");
        setEmail(localStorage.getItem("E_mail") || "");
        setEstado(localStorage.getItem("Estado") || "");
    }, []); 

    return (
      <section className="sectionatualizar">
      <div className='containerCadastrar'>
        <header className="headerCreate">Atualizar Cliente</header>
    
        <form>

          <div className="campo nome">
            {/* <label>Nome</label> */}
            <input
            value={Nome}
              onChange={(e) => {
                setNome(e.target.value);
              }}
              placeholder="Insira o nome do cliente"
            />
          </div>
          
          <div className="campo cpf">
            {/* <label>CPF</label> */}
            <input
            value={CPF}
              onChange={(e) => {
                setCpf(e.target.value);
              }}
              placeholder="Insira o CPF do cliente"
            />
          </div>

          <div className="campo email">
            {/* <label>Email</label> */}
            <input
            value={E_mail}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Insira o e-mail do cliente"
            />
          </div>

          <div className="campo estado">
            {/* <label>Estado</label> */}
            {/*  <input onChange={
                      (e) => { setEstado(e.target.value) }
                    } placeholder='Insira o e-estado do cliente' /> */}
            <select
              value={Estado}
              onChange={(e) => {
                setEstado(e.target.value);
              }}
            >
              <option value="">Selecione o estado</option>
              <option value="Acre">Acre</option>
              <option value="Alagoas">Alagoas</option>
              <option value="Amapá">Amapá</option>
              <option value="Amazonas">Amazonas</option>
              <option value="Bahia">Bahia</option>
              <option value="Ceará">Ceará</option>
              <option value="Distrito Federal">Distríto Federal</option>
              <option value="Espirito Santo">Espírito Santo</option>
              <option value="Goias">Goiás</option>
              <option value="Maranhao">Maranhão</option>
              <option value="Mato Grosso">Mato Grosso</option>
              <option value="Mato Grosso do Sul">Mato Grosso do Sul</option>
              <option value="Minas Gerais">Minas Gerais</option>
              <option value="Para">Pará</option>
              <option value="Paraiba">Paraíba</option>
              <option value="Parana">Paraná</option>
              <option value="Pernambuco">Pernambuco</option>
              <option value="Piaui">Piauí</option>
              <option value="Rio de Janeiro">Rio de Janeiro</option>
              <option value="Rio Grande do Norte">Rio Grande do Norte</option>
              <option value="Rio Grande do Sul">Rio Grande do Sul</option>
              <option value="Rondonia">Rondônia</option>
              <option value="Roraima">Roraíma</option>
              <option value="Santa Catarina">Santa Catarina</option>
              <option value="São Paulo">São Paulo</option>
              <option value="Sergipe">Sergipe</option>
              <option value="Tocantins">Tocantins</option>
            </select>
          </div>

          <div>
            <Link to="/dashboard/clientes">
            <button className='cadastrarButton' type="submit" onClick={sendDataToApi}>
              Atualizar
            </button>
            </Link>
          </div>

        </form>

      </div>

    </section>
    );
  }