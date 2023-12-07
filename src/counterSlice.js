import { createSlice } from '@reduxjs/toolkit'

const initialState={counter: 0};
const counterSlice = createSlice({
    name: 'counterSlice',
    initialState,
    reducers: {

        increment(state, action) {

             state.counter++;
        },
        decrement(state, action) {
             state.counter--;

        }


    }


})

export const actions=counterSlice.actions;

export const counterSilceReducer=  counterSlice.reducer;

