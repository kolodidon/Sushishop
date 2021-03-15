import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

export type SushiBlockPropsType = {
    id: number
    imageUrl: string
    name: string
    types: Array<number>
    quantity: Array<number>
    price: number
    category: number
    rating: number
    onAddSushi: (obj: any) => void
}

const SushiBlock: React.FC<SushiBlockPropsType> = ({ id, imageUrl, name, types, quantity, price, category, rating, onAddSushi }) => {
    let initialType = (types.includes(0)) ?  0 : 1
    const [currentType, setCurrentType] = useState(initialType)
    const [currentQuantity, setCurrentQuantity] = useState(0)
    const [addedQuantity, setAddedQuantity] = useState(0)
    const onAddSushiFinal = (obj: any) => {
        setAddedQuantity(addedQuantity + 1)
        onAddSushi(obj)
    }
    const localTypes = ['традиционный', 'большой']
    let totalPrice = 0;
    (currentType === 0)
        ? totalPrice = price * quantity[currentQuantity]
        : totalPrice = Math.ceil(price * quantity[currentQuantity] * 1.5)
    const dispatch = useDispatch()
    console.log(`SushiBlock #${id} rerendered!`)
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
                    от {totalPrice} ₽
                </div>
                <div 
                    className="button button--outline button--add" 
                    onClick={() => onAddSushiFinal( { id, imageUrl, name, type: localTypes[currentType], quantity: quantity[currentQuantity], totalPrice, addedQuantity} )}
                >
                    <span>Добавить</span>
                    {
                        addedQuantity
                            ? <i>{addedQuantity}</i>
                            : null
                    }
                </div>
            </div>
        </div>
    )
}

export default SushiBlock