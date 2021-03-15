import React from 'react'
import { Link } from 'react-router-dom'

import {CartButton} from '../'

import Logo from '../../assets/img/sushi-logo.svg'

const Header: React.FC = () => {
    console.log('Header rerendered!')
    return (
        <div className="header">
            <div className="container">
                <Link to='/'>
                    <div className="header__logo">
                        <img width="38" src={Logo} alt="Sushi logo" />
                        <div>
                            <h1>React SushiShop</h1>
                            <p>Реактивные роллы с типизацией!</p>
                        </div>
                    </div>
                </Link>
                <Link to='/cart'>
                    <CartButton />
                </Link>
            </div>
        </div>
    )
}

export default Header