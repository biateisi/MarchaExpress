import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";
import axios from "axios";
import "./css/Read.css";

type Cliente = {
  id: string;
  Nome: string;
  CPF: string;
  E_mail: string;
  Estado: string;
};

export default function Read() {
  const { data: clientes, isFetching } = useFetch<Cliente[]>("/cliente");

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

      {isFetching && <p>Carregando...</p>}
      {clientes?.map((dado, i) => {
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
  );
}
