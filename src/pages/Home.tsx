import React from 'react'

import { Categories, Sort, SushiList } from '../components'

const Home: React.FC = () => {

    const categoryItems = ['Все', 'Мясные', 'Вегетерианские', 'Гриль', 'Острые', 'Закрытые']
    const sortItems = [{ name: 'популярности', type: 'popular' }, { name: 'цене', type: 'price' }, { name: 'алфавиту', type: 'alphabet' }]
    console.log ('Home rerendered!')

    return (
        <div className="container">
            <div className="content__top">
                <Categories items={categoryItems} />
                <Sort items={sortItems} />
            </div>
            <h2 className="content__title">Все суши и роллы</h2>
            <SushiList />
        </div>
    )
}

export default Home