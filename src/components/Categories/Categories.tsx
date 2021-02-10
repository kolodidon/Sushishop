import React, { useState } from 'react'

type CategoriesPropsType = {
    items: Array<string>
}

const Categories: React.FC<CategoriesPropsType> = ({ items }) => {
    const [activeItem, setActiveItem] = useState(0)
    return (
        <div className="categories">
            <ul>
                {
                    items &&
                    items.map((item, index) =>
                        <li
                            key={`${item}_${index}`}
                            className={(activeItem === index) ? 'active' : ''}
                            onClick={() => setActiveItem(index)}
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