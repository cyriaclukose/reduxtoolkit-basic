import {configureStore } from '@reduxjs/toolkit'
import {counterSilceReducer} from './counterSlice'

const store =configureStore({

    reducer: counterSilceReducer

});

export default store;