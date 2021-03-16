import React from 'react'
import {ReactComponent as CartMinus} from '../../assets/img/cart-minus.svg'
import {ReactComponent as CartPlus} from '../../assets/img/cart-plus.svg'
import {ReactComponent as CartCross} from '../../assets/img/cart-cross.svg'

type CartItemPropsType = {
    id: number
    imageUrl: string
    name: string
    quantity: number
    addedQuantity: number
    totalPrice: number
    type: string
    addedCount: number
    dispatchPlusTotalPrice: (num: number) => void
    dispatchMinusTotalPrice: (num: number) => void
    dispatchPlusTotalCount: (num: number) => void
    dispatchMinusTotalCount: (num: number) => void
    dispatchAbortCartItem: (num: number) => void
    dispatchSetCartItemAddedQuantity: (orderId: number, addedQuantity: number) => void
    orderId: number
}

const CartItem: React.FC<CartItemPropsType> = ({id, imageUrl, name, quantity, addedQuantity, totalPrice, type, dispatchPlusTotalPrice, dispatchMinusTotalPrice, dispatchPlusTotalCount, dispatchMinusTotalCount, dispatchAbortCartItem, dispatchSetCartItemAddedQuantity, orderId}) => {
    const onPlusClick = () => {
        dispatchSetCartItemAddedQuantity(orderId, addedQuantity + 1)
        dispatchPlusTotalPrice(totalPrice)
        dispatchPlusTotalCount(1)
    }
    const onMinusClick = () => {
        dispatchSetCartItemAddedQuantity(orderId, addedQuantity - 1)
        dispatchMinusTotalPrice(totalPrice)
        dispatchMinusTotalCount(1)
    }
    console.log('CartItem rerendered!')
    return (
        <div className="cart__item">
            <div className="cart__item-img">
                <img className="sushi-block__image"
                    src={imageUrl}
                    alt="Sushi" />
            </div>
            <div className="cart__item-info">
                <h3>{name}</h3>
                <p>Количество: {quantity} шт.</p>
                <p>Размер: {type}</p>
            </div>
            <div className="cart__item-count">
                <button disabled={addedQuantity === 1} className="button button--outline button--circle cart__item-count-minus" onClick={() => {onMinusClick()}}>
                    <CartMinus />
                </button>
                <b>{addedQuantity}</b>
                <button className="button button--outline button--circle cart__item-count-plus" onClick={() => {onPlusClick()}}>
                    <CartPlus />
                </button>
            </div>
            <div className="cart__item-price">
                <b>{totalPrice * addedQuantity} ₽</b>
            </div>
            <div className="cart__item-remove" onClick={() => {dispatchAbortCartItem(orderId)}}>
                <div className="button button--outline button--circle">
                    <CartCross />
                </div>
            </div>
        </div>
    )
}

export default CartItem
