import React from 'react'

import { Categories, Sort, SushiBlock } from '../components'
import { SushiType } from '../Api'

type HomePropsType = {
    items: SushiType | undefined
}

const Home: React.FC<HomePropsType> = ({items}) => {
    return (
        <div className="container">
            <div className="content__top">
                <Categories items={['Все', 'Мясные', 'Вегетерианские', 'Гриль', 'Острые', 'Закрытые']} />
                <Sort items={['популярности', 'цене', 'алфавиту']} />
            </div>
            <h2 className="content__title">Все суши и роллы</h2>
            <div className="content__items">
                {
                    items && items.map((item) => (
                        <SushiBlock key={item.id} {...item}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Home