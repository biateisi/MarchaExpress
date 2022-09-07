import './Home.css'
import doorguy from '../assets/Doorguy.svg'
import deliveryaddress from '../assets/DeliveryAddress.svg'
import duvida from '../assets/Duvida.svg'
import cadastro from '../assets/Cadastro.svg'
import box from '../assets/Box.svg'
import handshake from '../assets/Handshake.svg'
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export default function Home() {

    const [loading , setLoading] = useState(false);

    useEffect(() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }, []);
    
    return (
        /*<>
            <h1 className='home'>Home</h1>
        </>*/
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
                                <button className='homeButton'>Vamos lá!</button>
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
                            Lorem ipsum dolor sit amet. Est alias magni non reiciendis neque et dolor sunt. Ut numquam similique in galisum illum nam architecto optio id labore velit optio possimus eos quas maiores. Sed cupiditate voluptatum quo omnis ipsum hic itaque amet eum iusto accusantium 33 cupiditate natus eum dolorem atque et quod voluptatem.
                            <br /><br />
                            Aut dolor doloremque aut similique voluptatem et illum fugit ut asperiores repellendus et dignissimos impedit et corrupti labore a culpa voluptates. Id debitis illum qui laborum ipsa vel dicta earum qui error omnis a nihil dolores qui vitae Quis et voluptatibus dolor. Aut tempore enim et iusto optio ut cupiditate tempore. Ex impedit iusto qui vitae nihil in tempore omnis.

                            Et maiores repellendus ut asperiores fugit et iusto laborum in Quis unde ut voluptatem quod et reiciendis accusamus vel eligendi autem. Ut illum voluptas eum quisquam soluta qui vitae adipisci At odio quod ut optio vero. Ex maxime aliquam ab omnis soluta ut cumque exercitationem ea inventore delectus et modi officiis vel dicta tempora. Sit esse sint eum fugiat ratione aut fugit cupiditate placeat quibusdam sed molestias maiores a sunt nemo?

                            Ea veniam veniam non dolorem doloribus est autem similique est velit suscipit sed illum perspiciatis. 33 deserunt exercitationem At optio assumenda sit quae facere et enim magni.
                            <br /><br />
                            Qui ullam quidem aut galisum porro ut magni nihil in Quis enim 33 dolor rerum. Ea possimus facilis sit impedit atque nam voluptates saepe qui nemo saepe in internos perferendis nam quia labore sit accusantium itaque. Ut inventore saepe sed numquam ipsum et recusandae commodi.
                            <br /><br />
                            Quo earum deserunt ut quia consequatur et aperiam quia. In sunt incidunt et tempore animi sed molestias molestiae ut nisi accusamus ut culpa molestias vel delectus deserunt qui error dolorem.

                            Ut accusantium amet ex consequatur officiis quia quasi ut officiis error. Aut assumenda velit non tempore rerum in aliquid illo hic eaque aspernatur est laudantium minima. Aut dolores soluta non temporibus dignissimos aut modi esse est galisum porro rerum sunt 33 deleniti laborum. Vel dolores galisum est deserunt dolorem hic illum blanditiis est consequatur numquam aut repellat esse.
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
                        <span>Lorem ipsum dictumst ullamcorper blandit scelerisque class nullam etiam.</span>
                        <button className='cardsButton firstButton'>Vamos lá!</button>
                    </div>

                    <div className='cards card2' id='2'>
                        <div className='icon'>
                            <img src={box} className='box' alt='Caixa' />
                        </div>
                        <h3>Conecte-se</h3>
                        <span>Lorem ipsum dictumst ullamcorper blandit scelerisque class nullam etiam.</span>
                        <button className='cardsButton secondButton'>Vamos lá!</button>
                    </div>

                    <div className='cards card3' id='3'>
                        <div className='icon'>
                            <img src={handshake} className='handshake' alt='Mãos' />
                        </div>
                        <h3>Deixe com a gente</h3>
                        <span>Lorem ipsum dictumst ullamcorper blandit scelerisque class nullam etiam.</span>
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