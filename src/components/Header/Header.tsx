import React from 'react'

import {CartButton} from '../'

import Logo from '../../assets/img/sushi-logo.svg'

const Header: React.FC = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="header__logo">
                    <img width="38" src={Logo} alt="Sushi logo" />
                    <div>
                        <h1>React SushiShop</h1>
                        <p>Реактивные роллы с типизацией!</p>
                    </div>
                </div>
                <CartButton />
            </div>
        </div>
    )
}

export default Header