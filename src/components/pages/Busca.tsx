import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Busca.css";

type Cliente = {
  id: string;
  Nome: string;
  CPF: string;
  E_mail: string;
  Estado: string;
};

export default function Busca() {
  const [data, setData] = useState([]);
  /* const { data: clientes, isFetching } = useFetch<Cliente[]>(""); */

  const buscaId = (id: string) => {
    axios.get(`http://localhost:4000/cliente/${id}`, {
        method: "GET",
        }).then((response) => {
        console.log(response.data);
        setData(response.data);
    });
    };

    const updateData = (
        id: string,
        Nome: string,
        CPF: string,
        E_mail: string,
        Estado: string
      ) => {
        localStorage.setItem("id", id);
        localStorage.setItem("Nome", Nome);
        localStorage.setItem("CPF", CPF);
        localStorage.setItem("E_mail", E_mail);
        localStorage.setItem("Estado", Estado);
      };
    
      const deleteData = (id: string) => {
        fetch(`http://localhost:4000/cliente/${id}`, {
          method: "DELETE",
        }).then((response) => {
          console.log(response);
        });
      };



  return (
    <div className="pesquisaSection">
      <header className="headerBusca">Buscar Cliente</header>

      <form>
        <div className="campoid">
          <input
            onChange={(e) => {
              buscaId(e.target.value);
            }}
            placeholder="Insira o ID do cliente"
          />
        </div>
      </form>

      <div className="tabela">
        <header className="headerRead">Gerenciar Clientes</header>

        <table className="titulos">
          <tbody>
            <tr>
              <td className="thID">ID</td>
            </tr>
            <tr>
              <td className="thNome">Nome</td>
            </tr>
            <tr>
              <td className="thCPF">CPF</td>
            </tr>
            <tr>
              <td className="thEmail">E-mail</td>
            </tr>
            <tr>
              <td className="thEstado">Estado</td>
            </tr>
            <tr>
              <td className="thAcoes">Ações</td>
            </tr>
          </tbody>
        </table>

        {[data]?.map((dado, i) => {
          return (
            <div className="containerRead">
              <table className="conteudodados" key={`table-${i}`}>
                <tbody>
                  <tr>
                    <td className="tdID">{dado.id}</td>
                  </tr>
                  <tr>
                    <td className="tdNome">{dado.Nome}</td>
                  </tr>
                  <tr>
                    <td className="tdCPF">{dado.CPF}</td>
                  </tr>
                  <tr>
                    <td className="tdEmail">{dado.E_mail}</td>
                  </tr>
                  <tr>
                    <td className="tdEstado">{dado.Estado}</td>
                  </tr>
                  <tr>
                  <td>
                    <Link to="/dashboard/clientes/atualizar">
                      <button
                        className="btnUpdate"
                        onClick={() =>
                          updateData(
                            dado.id,
                            dado.Nome,
                            dado.CPF,
                            dado.E_mail,
                            dado.Estado
                          )
                        }
                      >
                        Editar
                      </button>
                    </Link>
            
                    <Link to="/dashboard/clientes">
                      <button
                      className="btnDelete"
                        type="submit"
                        onClick={() => (
                          deleteData(dado.id), window.location.reload()
                        )}
                      >
                        Excluir
                      </button>
                    </Link>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          );
        })}
      </div>
    </div>
  );
}
