import './Home.css'
import doorguy from '../assets/Doorguy.svg'
import deliveryaddress from '../assets/DeliveryAddress.svg'
import duvida from '../assets/Duvida.svg'
import cadastro from '../assets/Cadastro.svg'
import box from '../assets/Box.svg'
import handshake from '../assets/Handshake.svg'
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function Home() {

    const [loading , setLoading] = useState(false);

    useEffect(() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }, []);
    
    return (
        <div className='mother'>
            {
                loading ? 
                <div className='loading'>
                    <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                </div>
                :


        <div className='containerHome'>


            <section className='firstSection'>

                <div className='firstLeftAndRitgh'>

                    <div className='left'>
                        <div className='firstText'>

                            <div className='firstTitle'>
                                <h1>Não é uma entrega.<br />É Marcha Express.</h1>
                            </div>

                            <div className='firstSubtitle'>
                                <p>Sustentabilidade e eficiência, juntas.</p>
                            </div>

                            <div className='firstButtonHome'>
                                <Link to='/cadastrar'>
                                    <button className='homeButton'>Vamos lá!</button>
                                </Link>
                            </div>


                            <div className='firstSocial'>
                                <i className='fa-brands fa-square-facebook fa-xl fa-fw'></i>
                                <i className='fa-brands fa-linkedin fa-xl fa-fw'></i>
                                <i className='fa-brands fa-twitter fa-xl fa-fw'></i>
                                <i className='fa-brands fa-instagram fa-xl fa-fw'></i>
                            </div>

                        </div>

                    </div>

                    <div className='right'>
                        <img src={doorguy} className='doorguySvg' alt='SVG' />
                    </div>

                </div>

            </section>


            <section className='secondSection'>

                <div className='sobreNos'>

                    <p className='secondSectionFirstTitle'>
                        Sobre nós
                    </p>

                    <h1 className='secondSectionSecondTitle'>
                        Reinventando o possível
                    </h1>

                    <div className='secondSectionTextBox'>
                        <p>
                            Express-Express com sua sólida experiência em entregas pelo Brasil implementou a opção de entregas sustentáveis, a Ecodelivery: a Marcha Express. 
                            <br /><br />
                            Nos últimos anos, a pauta da proteção ao meio ambiente vem ganhando força no nosso dia a dia. No mercado das entregas, não é diferente.
                            Alguns termos como logística verde ou ecodelivery vêm ganhando cada vez mais espaço no mercado.
                            Assim, empresas e soluções focadas em entregas sustentáveis estão aparecendo para repensar o uso de veículos que utilizam combustíveis poluentes.
                            <br /><br />
                            O ecodelivery otimiza o tempo (tornando o trabalho mais eficiente!) uma vez que gasta-se menos tempo no trânsito. Algumas cidades, por exemplo, tem faixas exclusivas para bicicletas, facilitando ainda mais o trajeto. 
                            <br /><br />
                            Nossa missão é realizar um serviço que agrida a natureza o mínimo possível, fazendo entregas com' bicicletas, e-bikes,  e outros veículos movidos à energia elétrica.
                            <br /><br />
                            Com opções de transportes sustentáveis, reduzimos os impactos ambientais, bem como nos custos de operação, com isso o valor do produto final fica mais barato, beneficiando também o consumidor final!
                        </p>
                    </div>

                </div>

            </section>



            <section className='thirdSection'>

                <div className='secondLeftAndRight'>

                    <div className='secondLeft'>
                        <img src={deliveryaddress} className='deliveryaddressSvg' alt='' />
                    </div>

                    <div className='secondRight'>

                        <div className='secondTitle'>
                            <h1>Como funciona?</h1>
                        </div>

                        <div className='secondText'>
                            <p>
                                As empresas que desejarem ter a Marcha Express como intermediária em suas entregas devem se cadastrar no site e podem entrar em contato para mais informações, como sobre o orçamento. Empresas que já utilizam os serviços da Express-Express podem solicitar a inclusão em seu pacote de serviços, através do campo "contato".
                                <br /><br />
                                Após fecharem negócio, a contratante pode escolher as opções de entrega que são disponibilizados em sua conta.
                                <br /><br />
                                Depois, a Marcha Express coleta no estoque da contratante e o produto é entregue ao consumidor final.
                                <br /><br />
                                A empresa trabalha com limitação de peso, volume e localidades atendidas.
                            </p>
                        </div>

                    </div>

                </div>

            </section>

            <section className='fourthSection'>

                <div className='fourthSectionDiv'>

                    <div className='fourthSectionTextBox'>
                        <h1>Vamos juntos?</h1>
                    </div>

                </div>

            </section>



            <section className='fifthSection'>
                <div className='fifthSecionDiv'>

                    <div className='cards card1' id='1'>
                        <div className='icon'>
                            <img src={cadastro} className='cadastro' alt='Cadastro' />
                        </div>
                        <h3>Cadastre-se</h3>
                        <span>Realize seu cadastro no site.</span>
                        <button className='cardsButton firstButton'>Vamos lá!</button>
                    </div>

                    <div className='cards card2' id='2'>
                        <div className='icon'>
                            <img src={box} className='box' alt='Caixa' />
                        </div>
                        <h3>Conecte-se</h3>
                        <span>Faça o login em sua conta e preencha as informações 
                            da entrega.</span>
                        <button className='cardsButton secondButton'>Vamos lá!</button>
                    </div>

                    <div className='cards card3' id='3'>
                        <div className='icon'>
                            <img src={handshake} className='handshake' alt='Mãos' />
                        </div>
                        <h3>Deixe com a gente</h3>
                        <span>O resto é com a gente ;)</span>
                        <button className='cardsButton thirdButton'>Vamos lá!</button>
                    </div>

                </div>
            </section>



            <section className='sixthSection'>

                <div className='thirdLeftAndRight'>

                    <div className='thirdLeft'>
                        <img src={duvida} className='DuvidaSvg' alt='Dúvida' />
                    </div>

                    <div className='thirdRight'>

                        <div className='thirdTitle'>
                            <h1>Dúvidas?</h1>
                        </div>


                        <div className='thirdText'>
                            <p>
                                • Como faço para utilizar o ecodelivery? <br /><br />

                                Basta se cadastrar <b>aqui</b>. <br /><br /><br />



                                • Como solicito a entrega dos pedidos de meus clientes? <br /><br />

                                Após o cadastro no site, o usuário deve logar em sua conta e cadastrar as infomações da entrega no formulário disponível, nosso sistema disponibilizará o entregar adequado conforme as informações definidas e sua entrega será realizada em até 48h da solicitação.
                            </p>
                        </div>

                    </div>

                </div>

            </section>

        </div>
            }
        </div>
    )
}
