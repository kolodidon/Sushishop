import React from 'react'
import { SushiBlock } from '../'
import { SushiStateType, sushiSelector } from '../../redux/sushiSlice'
import { useSelector } from 'react-redux'

const SushiList = () => {

    const { items, isLoading, error }: SushiStateType = useSelector(sushiSelector)
    console.log('SushiList rerendered!')

    return (
        <div className="content__items">
            {
                (isLoading)
                    ? <h1>Загрузка...</h1>
                    : (error)
                        ? <h1>{error} Что-то пошло не так!</h1>
                        : items && items.map((item) => (
                            <SushiBlock key={item.id} {...item} />
                        ))
            }
        </div>
    )
}

export default SushiList
