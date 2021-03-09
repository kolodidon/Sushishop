import { combineReducers } from '@reduxjs/toolkit'

import sushiSlice from './sushiSlice'

const rootReducer = combineReducers({
    sushi: sushiSlice.reducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer