import { configureStore } from '@reduxjs/toolkit'
import CounterSlice from './features/counter/CounterSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      counter: CounterSlice
    }
  })
}

// What is the type os this store from the store itself
export type AppStore = ReturnType<typeof makeStore>

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
