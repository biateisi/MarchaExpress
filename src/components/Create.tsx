import React, { useState } from "react";
import axios from "axios";
import "./css/Create.css";

export default function Create() {
  const [Nome, setNome] = useState("");
  const [CPF, setCpf] = useState("");
  const [E_mail, setEmail] = useState("");
  const [Estado, setEstado] = useState("");

  console.log(Nome);
  console.log(CPF);
  console.log(E_mail);
  console.log(Estado);

  const sendDataToApi = () => {
    axios
      .post("http://localhost:4000/cliente", {
        Nome,
        CPF,
        E_mail,
        Estado,
      })
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <section>
      <div className='containerCadastrar'>
        <header className="headerCreate">Cadastrar Cliente</header>
    
        <form>

          <div className="campo nome">
            {/* <label>Nome</label> */}
            <input
              onChange={(e) => {
                setNome(e.target.value);
              }}
              placeholder="Insira o nome do cliente"
            />
          </div>
          
          <div className="campo cpf">
            {/* <label>CPF</label> */}
            <input
              onChange={(e) => {
                setCpf(e.target.value);
              }}
              placeholder="Insira o CPF do cliente"
            />
          </div>

          <div className="campo email">
            {/* <label>Email</label> */}
            <input
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
            <button className='cadastrarButton' type="submit" onClick={sendDataToApi}>
              Cadastrar
            </button>
          </div>

        </form>

      </div>

    </section>
  );
}