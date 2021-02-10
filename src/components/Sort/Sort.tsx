import React, { useEffect, useRef, useState } from 'react'

import SortArrow from '../../assets/img/sort-arrow.svg'

type SortPropsType = {
    items: Array<string>
}

const Sort: React.FC<SortPropsType> = ({ items }) => {
    const [isPopup, setPopup] = useState(false)
    const [activeItem, setActiveItem] = useState(0)
    const sortRef = useRef<HTMLDivElement>(null)
    const setActiveItemAndClosePopup = (item: number) => {
        setActiveItem(item)
        setPopup(!isPopup)
    }
    const handleClick = (e: MouseEvent) => {
        //@ts-ignore
        if (!e.composedPath().includes(sortRef.current)) {
            setPopup(false)
        }
    }
    useEffect(() => {
        document.body.addEventListener('click', handleClick)
    }, [])
    return (
        <div className="sort" ref={sortRef}>
            <div className="sort__label" onClick={() => setPopup(!isPopup)}>
                <img src={SortArrow} alt="Arrow" className={!isPopup ? 'rotated' : ''}/>
                <b>Сортировка по:</b>
                <span>{items[activeItem]}</span>
            </div>
            {
                isPopup &&
                <div className="sort__popup">
                    <ul>
                        {
                            items &&
                            items.map((item, index) =>
                                <li
                                    key={`${item}_${index}`}
                                    className={(activeItem === index) ? 'active' : ''}
                                    onClick={() => setActiveItemAndClosePopup(index)}
                                >
                                    {item}
                                </li>
                            )
                        }
                    </ul>
                </div>
            }
        </div>
    )
}

export default Sort