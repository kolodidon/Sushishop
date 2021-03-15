import { combineReducers } from '@reduxjs/toolkit'

import sushiSlice from './sushiSlice'
import cartSlice from './cartSlice'

const rootReducer = combineReducers({
    sushi: sushiSlice.reducer,
    cart: cartSlice.reducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer