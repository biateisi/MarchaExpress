import React from 'react'
import './Contato.css'

export default function Contato () {
    return (
        <section className='sectionContato'>
            <div className='bady'>
                <div className='container'>

                    <div className='content'>
                        <div className='left-side'>
                            <div className='address details'>
                                <i className='fas fa-map-marker-alt'></i>
                                <div className='topic'>Endereço</div>
                                <div className='text-one'>Rua, Número, 777</div>
                                <div className='text-two'>Complemento, 01</div>
                            </div>
                            <div className='phone details'>
                                <i className='fas fa-phone-alt'></i>
                                <div className='topic'>Telefone</div>
                                <div className='text-one'>+55 0000-0000</div>
                                <div className='text-two'>+55 1111-2111</div>
                            </div>
                            <div className='email details'>
                                <i className='fas fa-envelope'></i>
                                <div className='topic'>Email</div>
                                <div className='text-one'>grupo7@a.com</div>
                                <div className='text-two'>infogrupo7@a.com</div>
                            </div>
                        </div>

                        <div className='right-side'>
                            <div className='topic-text'>Entre em contato</div>
                        

                            <form action='#'> 
                                <div className='input-box'>
                                    <input type='text' placeholder='Seu nome'></input>
                                </div>
                                <div className='input-box'>
                                    <input type='text' placeholder='Seu email'></input>
                                </div>
                                <div className='input-box message-box'>
                                    <textarea></textarea>
                                </div>
                                <div className='button'>
                                    <input type='button' value='Enviar'></input>
                                </div>
                            </form>   

                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}