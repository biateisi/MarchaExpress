import React from 'react'
import { useLocation } from 'react-router-dom'
import './css/Footer.css'

const Footer = ({path} : any) => {

    const { pathname } = useLocation();
    console.log(pathname);
    if (pathname === "/dashboard" || pathname === "/dashboard/clientes" || pathname === "/dashboard/" || pathname === "/dashboard/clientes/" || pathname === "/dashboard/clientes/atualizar" ) return null;

    return(
        <section className='footerSection'>
            <div className='footer-container'>
                <div className='footer'>
                    <div className='footer-heading footer1'>
                        <h2>Sobre nós</h2>
                        <a href='#'>Quem somos</a>
                        <a href='#'>Como funciona</a>
                    </div>

                    <div className='footer-heading footer2'>
                        <h2>Contato</h2>
                        <a href='#'>Perguntas frequentes</a>
                        <a href='#'>Entre em contato!</a>
                    </div>

                    <div className='footer-heading footer3'>
                        <h2>Conecte-se</h2>
                        <a href='#'>Instagram</a>
                        <a href='#'>Facebook</a>
                        <a href='#'>LinkedIn</a>
                        <a href='#'>Twitter</a>
                    </div>

                    <div className='footer-email-form'>
                        <h2>Assine a newsletter</h2>
                        <input type='email' placeholder='Email' id='footer-email'></input>
                        <input type='submit' value='Assinar' id='footer-email-btn'></input>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;