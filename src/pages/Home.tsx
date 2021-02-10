import React from 'react'

import { Categories, Sort } from '../components'

const Home: React.FC = () => {
    return (
        <div className="container">
            <div className="content__top">
                <Categories items={['Все', 'Мясные', 'Вегетерианские', 'Гриль', 'Острые', 'Закрытые']} />
                <Sort items={['популярности', 'цене', 'алфавиту']} />
            </div>
            <h2 className="content__title">Все суши и роллы</h2>
            <div className="content__items">
                <div className="sushi-block">
                    <img
                        className="sushi-block__image"
                        src="https://images.sushishop.ru/assets/images/cache/docs/17669/roll-arigato-kv.jpg/1592157186/656x656.webp"
                        alt="Sushi"
                    />
                    <h4 className="sushi-block__title">Суши-ролл</h4>
                    <div className="sushi-block__selector">
                        <ul>
                            <li className="active">большой</li>
                            <li>традиционный</li>
                        </ul>
                        <ul>
                            <li className="active">5 шт.</li>
                            <li>10 шт.</li>
                            <li>15 шт.</li>
                        </ul>
                    </div>
                    <div className="sushi-block__bottom">
                        <div className="sushi-block__price">от 395 ₽</div>
                        <div className="button button--outline button--add">
                            <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                    fill="white"
                                />
                            </svg>
                            <span>Добавить</span>
                            <i>2</i>
                        </div>
                    </div>
                </div> <div className="sushi-block">
                    <img
                        className="sushi-block__image"
                        src="https://images.sushishop.ru/assets/images/cache/docs/391/kaliforniya-kv.jpg/1592157121/656x656.webp"
                        alt="Sushi"
                    />
                    <h4 className="sushi-block__title">Суши-ролл</h4>
                    <div className="sushi-block__selector">
                        <ul>
                            <li className="active">большой</li>
                            <li>традиционный</li>
                        </ul>
                        <ul>
                            <li className="active">5 шт.</li>
                            <li>10 шт.</li>
                            <li>15 шт.</li>
                        </ul>
                    </div>
                    <div className="sushi-block__bottom">
                        <div className="sushi-block__price">от 395 ₽</div>
                        <div className="button button--outline button--add">
                            <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                    fill="white"
                                />
                            </svg>
                            <span>Добавить</span>
                            <i>2</i>
                        </div>
                    </div>
                </div> <div className="sushi-block">
                    <img
                        className="sushi-block__image"
                        src="https://images.sushishop.ru/assets/images/cache/docs/401/vegetarianskij-roll-kv.jpg/1592157047/656x656.webp"
                        alt="Sushi"
                    />
                    <h4 className="sushi-block__title">Суши-ролл</h4>
                    <div className="sushi-block__selector">
                        <ul>
                            <li className="active">большой</li>
                            <li>традиционный</li>
                        </ul>
                        <ul>
                            <li className="active">5 шт.</li>
                            <li>10 шт.</li>
                            <li>15 шт.</li>
                        </ul>
                    </div>
                    <div className="sushi-block__bottom">
                        <div className="sushi-block__price">от 395 ₽</div>
                        <div className="button button--outline button--add">
                            <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                    fill="white"
                                />
                            </svg>
                            <span>Добавить</span>
                            <i>2</i>
                        </div>
                    </div>
                </div> <div className="sushi-block">
                    <img
                        className="sushi-block__image"
                        src="https://images.sushishop.ru/assets/images/cache/docs/38480/sushi-kejk.jpg/1606803826/656x656.webp"
                        alt="Sushi"
                    />
                    <h4 className="sushi-block__title">Суши-ролл</h4>
                    <div className="sushi-block__selector">
                        <ul>
                            <li className="active">большой</li>
                            <li>традиционный</li>
                        </ul>
                        <ul>
                            <li className="active">5 шт.</li>
                            <li>10 шт.</li>
                            <li>15 шт.</li>
                        </ul>
                    </div>
                    <div className="sushi-block__bottom">
                        <div className="sushi-block__price">от 395 ₽</div>
                        <div className="button button--outline button--add">
                            <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                    fill="white"
                                />
                            </svg>
                            <span>Добавить</span>
                            <i>2</i>
                        </div>
                    </div>
                </div> <div className="sushi-block">
                    <img
                        className="sushi-block__image"
                        src="https://images.sushishop.ru/assets/images/cache/docs/38482/moca.jpg/1606805408/656x656.webp"
                        alt="Sushi"
                    />
                    <h4 className="sushi-block__title">Суши-ролл</h4>
                    <div className="sushi-block__selector">
                        <ul>
                            <li className="active">большой</li>
                            <li>традиционный</li>
                        </ul>
                        <ul>
                            <li className="active">5 шт.</li>
                            <li>10 шт.</li>
                            <li>15 шт.</li>
                        </ul>
                    </div>
                    <div className="sushi-block__bottom">
                        <div className="sushi-block__price">от 395 ₽</div>
                        <div className="button button--outline button--add">
                            <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                    fill="white"
                                />
                            </svg>
                            <span>Добавить</span>
                            <i>2</i>
                        </div>
                    </div>
                </div> <div className="sushi-block">
                    <img
                        className="sushi-block__image"
                        src="https://images.sushishop.ru/assets/images/cache/docs/17680/fast-roll-krab-v-tempure-kv.jpg/1592160530/656x656.webp"
                        alt="Sushi"
                    />
                    <h4 className="sushi-block__title">Суши-ролл</h4>
                    <div className="sushi-block__selector">
                        <ul>
                            <li className="active">большой</li>
                            <li>традиционный</li>
                        </ul>
                        <ul>
                            <li className="active">5 шт.</li>
                            <li>10 шт.</li>
                            <li>15 шт.</li>
                        </ul>
                    </div>
                    <div className="sushi-block__bottom">
                        <div className="sushi-block__price">от 395 ₽</div>
                        <div className="button button--outline button--add">
                            <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                    fill="white"
                                />
                            </svg>
                            <span>Добавить</span>
                            <i>2</i>
                        </div>
                    </div>
                </div> <div className="sushi-block">
                    <img
                        className="sushi-block__image"
                        src="https://images.sushishop.ru/assets/images/cache/docs/406/mini-roll-s-ogurcom-kv.jpg/1592160410/656x656.webp"
                        alt="Sushi"
                    />
                    <h4 className="sushi-block__title">Суши-ролл</h4>
                    <div className="sushi-block__selector">
                        <ul>
                            <li className="active">большой</li>
                            <li>традиционный</li>
                        </ul>
                        <ul>
                            <li className="active">5 шт.</li>
                            <li>10 шт.</li>
                            <li>15 шт.</li>
                        </ul>
                    </div>
                    <div className="sushi-block__bottom">
                        <div className="sushi-block__price">от 395 ₽</div>
                        <div className="button button--outline button--add">
                            <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                    fill="white"
                                />
                            </svg>
                            <span>Добавить</span>
                            <i>2</i>
                        </div>
                    </div>
                </div> <div className="sushi-block">
                    <img
                        className="sushi-block__image"
                        src="https://images.sushishop.ru/assets/images/cache/docs/17683/fast-roll-s-kuricej.jpg/1592160621/656x656.webp"
                        alt="Sushi"
                    />
                    <h4 className="sushi-block__title">Суши-ролл</h4>
                    <div className="sushi-block__selector">
                        <ul>
                            <li className="active">большой</li>
                            <li>традиционный</li>
                        </ul>
                        <ul>
                            <li className="active">5 шт.</li>
                            <li>10 шт.</li>
                            <li>15 шт.</li>
                        </ul>
                    </div>
                    <div className="sushi-block__bottom">
                        <div className="sushi-block__price">от 395 ₽</div>
                        <div className="button button--outline button--add">
                            <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                    fill="white"
                                />
                            </svg>
                            <span>Добавить</span>
                            <i>2</i>
                        </div>
                    </div>
                </div> <div className="sushi-block">
                    <img
                        className="sushi-block__image"
                        src="https://images.sushishop.ru/assets/images/cache/docs/52/sushi-s-ugrem-kv.jpg/1592161623/656x656.webp"
                        alt="Sushi"
                    />
                    <h4 className="sushi-block__title">Суши-ролл</h4>
                    <div className="sushi-block__selector">
                        <ul>
                            <li className="active">большой</li>
                            <li>традиционный</li>
                        </ul>
                        <ul>
                            <li className="active">5 шт.</li>
                            <li>10 шт.</li>
                            <li>15 шт.</li>
                        </ul>
                    </div>
                    <div className="sushi-block__bottom">
                        <div className="sushi-block__price">от 395 ₽</div>
                        <div className="button button--outline button--add">
                            <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                    fill="white"
                                />
                            </svg>
                            <span>Добавить</span>
                            <i>2</i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home