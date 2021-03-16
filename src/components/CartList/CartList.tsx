import React from 'react'
import { CartItem } from '..'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { itemsSelector, totalPriceSelector, totalCountSelector, plusTotalPrice, minusTotalPrice, plusTotalCount, minusTotalCount, abortCart, abortCartItem, setCartItemAddedQuantity } from '../../redux/cartSlice'
import { ReactComponent as ToLeftArrow } from '../../assets/img/grey-arrow-left.svg'
import { ReactComponent as CartLogo } from '../../assets/img/cart-cart.svg'
import { ReactComponent as TrashLogo } from '../../assets/img/trash-logo.svg'
import EmptyCart from '../EmptyCart/EmptyCart'



const CartList = () => {
    const dispatch = useDispatch()
    const items = useSelector(itemsSelector)
    const priceCount = useSelector(totalPriceSelector)
    const itemsCount = useSelector(totalCountSelector)
    const dispatchPlusTotalPrice = (num: number) => {dispatch(plusTotalPrice(num))}
    const dispatchMinusTotalPrice = (num: number) => {dispatch(minusTotalPrice(num))}
    const dispatchPlusTotalCount = (num: number) => {dispatch(plusTotalCount(num))}
    const dispatchMinusTotalCount = (num: number) => {dispatch(minusTotalCount(num))}
    const dispatchAbortCart = () => {dispatch(abortCart())}
    const dispatchAbortCartItem = (num: number) => {dispatch(abortCartItem(num))}
    const dispatchSetCartItemAddedQuantity = (orderId: number, addedQuantity: number) => {dispatch(setCartItemAddedQuantity({orderId, addedQuantity}))}
    

    if (items.length !== 0) {
        return (
            <>
                <div className="cart__top">
                    <h2 className="content__title">
                        <CartLogo />
                            Корзина
                        </h2>
                    <div className="cart__clear" onClick={() => {dispatchAbortCart()}}>
                        <TrashLogo />
                        <span>Очистить корзину</span>
                    </div>
                </div>
                <div className="content__items">
                    {
                        items.map ((e: any, key: number) => (
                            <CartItem 
                                key={key} 
                                {...e}
                                dispatchPlusTotalPrice={dispatchPlusTotalPrice}
                                dispatchMinusTotalPrice={dispatchMinusTotalPrice}
                                dispatchPlusTotalCount={dispatchPlusTotalCount}
                                dispatchMinusTotalCount={dispatchMinusTotalCount}
                                dispatchAbortCartItem = {dispatchAbortCartItem}
                                dispatchSetCartItemAddedQuantity = {dispatchSetCartItemAddedQuantity}
                                orderId = {key}
                            />
                        ))
                    }
                </div>
                <div className="cart__bottom">
                    <div className="cart__bottom-details">
                        <span> Всего роллов: <b>{itemsCount} шт.</b> </span>
                        <span> Сумма заказа: <b>{priceCount} ₽</b> </span>
                    </div>
                    <div className="cart__bottom-buttons">
                        <Link to="/" className="button button--outline button--add go-back-btn">
                            <ToLeftArrow />
                            <span>Вернуться назад</span>
                        </Link>
                        <div className="button pay-btn">
                            <span>Оплатить сейчас</span>
                        </div>
                    </div>
                </div>
            </>
        )
    } else {
        return <EmptyCart/>
    }
}

export default CartList
