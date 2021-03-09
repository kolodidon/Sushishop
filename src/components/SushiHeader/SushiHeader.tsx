import React from 'react'
import { CategoriesPropsType } from '../Categories/Categories'
import { categorySelector } from '../../redux/sushiSlice'
import { useSelector } from 'react-redux'

const SushiHeader: React.FC<CategoriesPropsType> = ({items}) => {
    const ActiveItem: number = useSelector(categorySelector)
    console.log('SushiHeader rerendered!')
    return (
        <h2 className="content__title">
            {
                (ActiveItem === 0)
                    ? 'Все суши и роллы'
                    : items[ActiveItem]
            }
        </h2>
    )
}

export default SushiHeader