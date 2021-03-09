import React from 'react'
import { SushiBlock, SushiPlaceholder } from '../'
import { SushiStateType, sushiSelector, FetchSushiThunk } from '../../redux/sushiSlice'
import { useSelector, useDispatch } from 'react-redux'

const SushiList = () => {
    const dispatch = useDispatch()
    const { items, isLoading, error }: SushiStateType = useSelector(sushiSelector)
    React.useEffect(() => {
        if (items.length == 0) { dispatch(FetchSushiThunk()) }
    }, [dispatch])
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
