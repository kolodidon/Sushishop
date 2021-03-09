import React from 'react'
import { SushiBlock, SushiPlaceholder } from '../'
import { SushiStateType, sushiSelector, FetchSushiThunk } from '../../redux/sushiSlice'
import { categorySelector, sortBySelector } from '../../redux/sushiSlice'
import { useSelector, useDispatch } from 'react-redux'

const SushiList = () => {
    const dispatch = useDispatch()
    const { items, isLoading, error }: SushiStateType = useSelector(sushiSelector)
    const category: number = useSelector(categorySelector)
    const sortBy: string = useSelector(sortBySelector)
    React.useEffect(() => {
        dispatch(FetchSushiThunk(category))
    }, [category, sortBy])
    console.log('SushiList rerendered!')

    return (
        <div className="content__items">
            {
                (error)
                    ? <h1>{error} Что-то пошло не так!</h1>
                    : (isLoading)
                        ? [...Array(12)].map((value, index: number) => <SushiPlaceholder key={index}/>)
                        : items && items.map((item) => (<SushiBlock key={item.id} {...item} />)) 
            }
        </div>
    )
}

export default SushiList
