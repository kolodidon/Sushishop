import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { categorySelector, setCategory } from '../../redux/filterSlice'

type CategoriesPropsType = {
    items: Array<string>
}

const Categories: React.FC<CategoriesPropsType> = ({ items }) => {
    const dispatch = useDispatch()
    const ActiveItem: number  = useSelector(categorySelector)
    return (
        <div className="categories">
            <ul>
                {
                    items &&
                    items.map((item, index) =>
                        <li
                            key={`${item}_${index}`}
                            className={(ActiveItem === index) ? 'active' : ''}
                            onClick={() => dispatch(setCategory(index))}
                        >
                            {item}
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default Categories