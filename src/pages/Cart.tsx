import React from 'react'
import { CartList } from '../components'

const Cart: React.FC = () => {
    console.log('Cart rerendered!')
    return (
        <div className="container container--cart">
            <div className="cart">
                <CartList/>
            </div>
        </div>
    )
}

export default Cart
