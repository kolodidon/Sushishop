import React from 'react'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
    return (
        <div className="cart cart--empty">
            <h2>Корзина пуста!</h2>
            <p>
                Кажется, Вы ещё не выбрали суши.<br />
                Для того, чтобы заказать суши, вернитесь на главную страницу.
            </p>
            <img src="/images/empty-cart.png" alt="Empty cart" />
            <Link to="/" className="button button--black">
                <span>Вернуться назад</span>
            </Link>
        </div>
    )
}

export default EmptyCart
