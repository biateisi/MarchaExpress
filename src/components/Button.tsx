import React from 'react'
import './css/Button.css';
import { Link } from 'react-router-dom';

export function Button() {
    return (
        <Link to='cadastrar'>
            <button className='btn'>Cadastrar</button>
        </Link>
    )
}