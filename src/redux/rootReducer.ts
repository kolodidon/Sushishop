import { combineReducers } from '@reduxjs/toolkit'

import filterSlice from './filterSlice'
import sushiSlice from './sushiSlice'

const rootReducer = combineReducers({
    filter: filterSlice.reducer,
    sushi: sushiSlice.reducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer