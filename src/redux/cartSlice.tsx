import { createSlice, PayloadAction, current  } from '@reduxjs/toolkit'
import { RootState } from './rootReducer'

export type CartStateType = {
    items: Array<any>
    totalPrice: number
    totalCount: number
}
type itemsPayloadType = any
export const initialState: CartStateType = {
    items: [],
    totalPrice: 0,
    totalCount: 0
}
function deepEqual(obj1: any, obj2: any) {
    return (
        (obj1.id === obj2.id) &&
        (obj1.imageUrl === obj2.imageUrl) &&
        (obj1.name === obj2.name) &&
        (obj1.type === obj2.type) &&
        (obj1.quantity === obj2.quantity) &&
        (obj1.totalPrice === obj2.totalPrice)
    )
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setTotalPrice(state, action: PayloadAction<number>) {
            state.totalPrice = action.payload
        },
        setTotalCount(state, action: PayloadAction<number>) {
            state.totalCount = action.payload
        },
        plusTotalPrice(state, action: PayloadAction<number>) {
            state.totalPrice = state.totalPrice + action.payload
        },
        minusTotalPrice(state, action: PayloadAction<number>) {
            state.totalPrice = state.totalPrice - action.payload
        },
        plusTotalCount(state, action: PayloadAction<number>) {
            state.totalCount = state.totalCount + action.payload
        },
        minusTotalCount(state, action: PayloadAction<number>) {
            state.totalCount = state.totalCount - action.payload
        },
        addSushiToCart(state, action: PayloadAction<itemsPayloadType>) {
            const currentItems = current(state.items)
            const incomingItem = action.payload
            const existingItem = currentItems.filter((item: any) => deepEqual(item, incomingItem))
            console.log(existingItem)
            if (existingItem.length > 0) {
                const existingItemIndex = currentItems.indexOf(existingItem[0]);
                state.items[existingItemIndex].addedQuantity = action.payload.addedQuantity + 1
              } else {
                incomingItem.addedQuantity = 1
                state.items.push(action.payload)
            }
            state.totalCount = state.totalCount + 1
            state.totalPrice = state.items.reduce((sum: number, obj: any) => obj.totalPrice * obj.addedQuantity + sum, 0)
        },
        abortCart(state) {
            state.items = []
            state.totalCount = 0
            state.totalPrice = 0
        },
        abortCartItem(state, action: PayloadAction<number>) {
            state.totalCount = state.totalCount - state.items[action.payload].addedQuantity
            state.totalPrice = state.totalPrice - (state.items[action.payload].addedQuantity * state.items[action.payload].totalPrice)
            state.items.splice(action.payload, 1)
        },
        setCartItemAddedQuantity(state, action: PayloadAction<{orderId: number, addedQuantity: number}>) {
            state.items[action.payload.orderId].addedQuantity = action.payload.addedQuantity
        }
    }
})

export const itemsSelector = (state: RootState) => state.cart.items
export const totalPriceSelector = (state: RootState) => state.cart.totalPrice
export const totalCountSelector = (state: RootState) => state.cart.totalCount
export const { setTotalPrice, setTotalCount, addSushiToCart, plusTotalPrice, minusTotalPrice, plusTotalCount, minusTotalCount, abortCart, abortCartItem, setCartItemAddedQuantity } = cartSlice.actions
export default cartSlice