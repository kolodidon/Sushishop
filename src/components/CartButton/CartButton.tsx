import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/rootReducer'
import { totalPriceSelector, totalCountSelector } from '../../redux/cartSlice'
import Cart from '../../assets/img/cart.svg'

const CartButton: React.FC = () => {
    const totalPrice: number = useSelector(totalPriceSelector)
    const totalCount: number = useSelector(totalCountSelector)
    console.log('CartButton rerendered!')
    return (
        <div className="header__cart">
            <div className="button button--cart">
                <span>{totalPrice} ₽</span>
                <div className="button__delimiter"></div>
                <img src={Cart} alt="Cart"/>
                <span>{totalCount}</span>
            </div>
        </div>
    )
}

export default CartButton