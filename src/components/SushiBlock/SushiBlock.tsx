import React, { useState } from 'react'

import { SushiBlockType } from '../../Api'

const SushiBlock: React.FC<SushiBlockType> = ({ id, imageUrl, name, types, quantity, price, category, rating }) => {
    const [currentType, setCurrentType] = useState(types[0])
    const [currentQuantity, setCurrentQuantity] = useState(0)
    const localTypes = ['традиционный', 'большой']

    return (
        <div className="sushi-block">
            <img
                className="sushi-block__image"
                src={imageUrl}
                alt="Sushi"
            />
            <h4 className="sushi-block__title">{name}</h4>
            <div className="sushi-block__selector">
                <ul>
                    {
                        localTypes.map((item, index) => (
                            <li
                                key={item}
                                onClick={() => setCurrentType(index)}
                                className={(currentType === index) ? 'active' : (!types.includes(index)) ? 'disabled' : ''}
                            >
                                {item}
                            </li>
                        ))
                    }

                </ul>
                <ul>
                    {
                        quantity.map((item, index) => (
                            <li
                                key={item}
                                onClick={() => setCurrentQuantity(index)}
                                className={(currentQuantity === index) ? 'active' : ''}
                            >
                                {item} шт.
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="sushi-block__bottom">
                <div className="sushi-block__price">
                    от {(currentType === 0) ? price * quantity[currentQuantity] : Math.ceil(price * quantity[currentQuantity] * 1.5)} ₽
                </div>
                <div className="button button--outline button--add">
                    <span>Добавить</span>
                    <i>2</i>
                </div>
            </div>
        </div>
    )
}

export default SushiBlock