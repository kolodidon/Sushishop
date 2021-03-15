import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { FetchSushi, SushiType } from '../Api'
import { RootState } from './rootReducer'

export type SushiStateType = {
    items: SushiType,
    isLoading: boolean,
    error: string,
    category: number,
    sortBy: string
}

export const FetchSushiThunk = createAsyncThunk(
    'fetchSushi',
    async ({category, sortBy}: {category: number, sortBy: string}, thunkAPI) => {
        const response = await FetchSushi(category, sortBy)
        return response
    }
)

export const initialState: SushiStateType = {
    items: [],
    isLoading: false,
    error: '',
    category: 0,
    sortBy: 'rating'
}

const sushiSlice = createSlice({
    name: 'sushi',
    initialState,
    reducers: {
        setSortBy(state, action: PayloadAction<string>) {
            state.sortBy = action.payload
        },
        setCategory(state, action: PayloadAction<number>) {
            state.category = action.payload
        }
    },
    extraReducers: builder => {
        builder.addCase(FetchSushiThunk.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(FetchSushiThunk.fulfilled, (state, action: PayloadAction<SushiType>) => {
            state.isLoading = false
            state.items = action.payload
        })
        builder.addCase(FetchSushiThunk.rejected, (state) => {
            state.isLoading = false  
            state.error = 'Ошибка!'
        })
    }
})

export const { setSortBy, setCategory } = sushiSlice.actions
export const sushiSelector = (state: RootState) => state.sushi
export const categorySelector = (state: RootState) => state.sushi.category
export const sortBySelector = (state: RootState) => state.sushi.sortBy
export default sushiSlice