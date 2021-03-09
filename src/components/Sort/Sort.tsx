import React, { useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { sortBySelector, setSortBy } from '../../redux/sushiSlice'

import SortArrow from '../../assets/img/sort-arrow.svg'

type SortPropsType = {
    items: Array<{ name: string, type: string }>
}

const Sort: React.FC<SortPropsType> = ({ items }) => {
    const dispatch = useDispatch()
    const ActiveItem: string = useSelector(sortBySelector)
    const [isPopup, setPopup] = useState(false)
    const sortRef = useRef<HTMLDivElement>(null)
    const setActiveItemAndClosePopup = (type: string) => {
        dispatch(setSortBy(type))
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
    console.log('Sort rerendered!')

    return (
        <div className="sort" ref={sortRef}>
            <div className="sort__label" onClick={() => setPopup(!isPopup)}>
                <img src={SortArrow} alt="Arrow" className={!isPopup ? 'rotated' : ''} />
                <b>Сортировка по:</b>
                <span>{items.find((e) => e.type === ActiveItem)?.name}</span>
            </div>
            {
                isPopup &&
                <div className="sort__popup">
                    <ul>
                        {
                            items &&
                            items.map((item, index) =>
                                <li
                                    key={`${item.type}_${index}`}
                                    className={(ActiveItem === item.type) ? 'active' : ''}
                                    onClick={() => setActiveItemAndClosePopup(item.type)}
                                >
                                    {item.name}
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