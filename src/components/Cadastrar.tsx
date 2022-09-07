import React from "react";
import './Cadastrar.css';
import { Link } from "react-router-dom";

export default function Cadastrar() {
  return (
    <section className="sectionCadastrar">
        <div className="containerx forms">
            <div className="form login">
                <div className="form-content">
                    <header>Cadastre-se</header>

                    <form action="#">
                        <div className="field input-field">
                            <input type="text" placeholder="CNPJ"></input>
                        </div>

                        <div className="field input-field">
                            <input type="email" placeholder="Email"></input>
                        </div>

                        <div className="field input-field">
                            <input type="password" placeholder="Senha"></input>
                        </div>

                        <div className="field button-field">
                            <Link to="/dashboard">
                            <button>Cadastrar</button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
  );
}