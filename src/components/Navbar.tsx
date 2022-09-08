import React, { useState } from 'react'
import { Button } from './Button'
import { Link, useLocation } from 'react-router-dom'
import './css/Navbar.css'

const Navbar = ({path}: any) => {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    const { pathname } = useLocation();
    console.log(pathname);
    if (pathname === "/dashboard" || pathname === "/dashboard/clientes" || pathname === "/dashboard/" || pathname === "/dashboard/clientes/" || pathname === "/dashboard/clientes/atualizar" || pathname === "/dashboard/clientes/busca") return null;

    return (
        <>
            <nav className='navbar'>
                <Link to='/' className='navbar-logo'>
                    M
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/contato' className='nav-links' onClick={closeMobileMenu}>
                            Contato
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/entrar' className='nav-links-mobile' id='entrarMobile' onClick={closeMobileMenu}/* vai ser ocultado no @Media pra telas MAIORES, so vai aparecer em telas Menores */>
                            Entrar
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/cadastrar' className='nav-links-mobile' id='cadastrar' onClick={closeMobileMenu}>
                            Cadastrar
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <p className='nav-links' id='entrar' onClick={closeMobileMenu}/* vai ser ocultado no @Media pra telas menores, so vai aparecer em telas MAIORES */> 
                            Entrar <i className='fas fa-caret-down'/> 
                        </p>
                    </li>
                </ul>
                <Button />
            </nav>
        </>
    )
}

export default Navbar;
