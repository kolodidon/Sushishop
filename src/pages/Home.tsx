import React from 'react'
import { Categories, Sort, SushiList, SushiHeader } from '../components'

const Home: React.FC = () => {
    const categoryItems = ['Все', 'Рыбные', 'Вегетерианские', 'Гриль', 'Острые', 'Закрытые']
    const sortItems = [{ name: 'популярности', type: 'rating' }, { name: 'цене', type: 'price' }, { name: 'алфавиту', type: 'name' }]
    console.log ('Home rerendered!')

    return (
        <div className="container">
            <div className="content__top">
                <Categories items={categoryItems} />
                <Sort items={sortItems} />
            </div>
            <SushiHeader items={categoryItems}/>
            <SushiList />
        </div>
    )
}

export default Home