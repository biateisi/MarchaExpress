import React from 'react'
import './Dashboard.css'
import { Link } from 'react-router-dom'
import mailbox from '../assets/Mailbox.svg'
import check from '../assets/Check.svg'
import send from '../assets/Send.svg'

export default function Dashboard () {
    return (
        <section className='dashboardSection'>

            <div className='dashboardDiv'>
                <div className='dashboardText'>
                    <h1>Olá!</h1>
                    <p>O que você deseja fazer hoje?</p>
                </div>

                <div className='dashboardCards'>
                    
                    <Link to='/dashboard/clientes'>
                    <div className='firstCard'>
                        <div className='dashboardCardsIcon'> 
                            <img src={check} className='' alt=''/>
                        </div>
                        <h3>Gerenciar Clientes</h3>
                        <p>
                            Escolha essa opção se voce precisa cadastrar um novo cliente à sua base de dados ou se deseja atualizar os dados de um cliente já existente.
                        </p>
                    </div>
                    </Link>

                    <div className='secondCard'>
                        <div className='dashboardCardsIcon'> 
                            <img src={mailbox} className='' alt=''/>
                        </div>
                        <h3>Gerenciar Pacotes</h3>
                        <p>
                            Escolha essa opção se voce precisa cadastrar um novo pacote à sua base de dados ou se deseja atualizar os dados de um pacote já existente.
                        </p>
                    </div>

                    <div className='thirdCard'>
                        <div className='dashboardCardsIcon'> 
                            <img src={send} className='' alt=''/>
                        </div>
                        <h3>Gerenciar Envios</h3>
                        <p>
                            Escolha essa opção se voce precisa cadastrar um novo envio à sua base de dados ou se deseja atualizar os dados de um envio já cadastrado.
                        </p>
                    </div>

                </div>

                <Link to='/'>
                <div className='backToHome'>
                    <p>Voltar para home</p>
                </div>
                </Link>
            </div>

        </section>
    )
}