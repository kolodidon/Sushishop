import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { FetchSushi, SushiType } from '../Api'
import { RootState } from './rootReducer'

export type SushiStateType = {
    items: SushiType,
    isLoading: boolean,
    error: string
}

export const FetchSushiThunk = createAsyncThunk(
    'fetchSushi',
    async (thunkAPI) => {
        const response = await FetchSushi()
        return response
    }
)

export const initialState: SushiStateType = {
    items: [],
    isLoading: false,
    error: ''
}

const sushiSlice = createSlice({
    name: 'sushi',
    initialState,
    reducers: {

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

export const {} = sushiSlice.actions
export const sushiSelector = (state: RootState) => state.sushi
export default sushiSlice