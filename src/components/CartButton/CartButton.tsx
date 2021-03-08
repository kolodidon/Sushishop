import React from 'react'

import Cart from '../../assets/img/cart.svg'

const CartButton: React.FC = () => {
    return (
        <div className="header__cart">
            <div className="button button--cart">
                <span>520 ₽</span>
                <div className="button__delimiter"></div>
                <img src={Cart} alt="Cart"/>
                <span>3</span>
            </div>
        </div>
    )
}

export default CartButton