import React from 'react'

import { Categories, Sort, SushiBlock } from '../components'
import { SushiType } from '../Api'

type HomePropsType = {
    items: SushiType | undefined
    isLoading: boolean
    error: string
}

const Home: React.FC<HomePropsType> = ({items, isLoading, error}) => {
    return (
        <div className="container">
            <div className="content__top">
                <Categories items={['Все', 'Мясные', 'Вегетерианские', 'Гриль', 'Острые', 'Закрытые']} />
                <Sort items={[
                    {name: 'популярности', type: 'popular'}, 
                    {name: 'цене', type: 'price'}, 
                    {name: 'алфавиту', type: 'alphabet'}
                ]} />
            </div>
            <h2 className="content__title">Все суши и роллы</h2>
            <div className="content__items">
                {
                    (isLoading)
                    ? <h1>Загрузка...</h1>
                    : (error)
                        ? <h1>{error} Что-то пошло не так!</h1>
                        : items && items.map((item) => (
                            <SushiBlock key={item.id} {...item}/>
                        ))
                }
            </div>
        </div>
    )
}

export default Home