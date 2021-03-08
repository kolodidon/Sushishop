import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './rootReducer'

const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        category: 0,
        sortBy: 'popular'
    },
    reducers: {
        setSortBy(state, action: PayloadAction<string>) {
            state.sortBy = action.payload
        },
        setCategory(state, action: PayloadAction<number>) {
            state.category = action.payload
        }
    }
})

export const { setSortBy, setCategory } = filterSlice.actions
export const categorySelector = (state: RootState) => state.filter.category
export const sortBySelector = (state: RootState) => state.filter.sortBy
export default filterSlice