import { RootState } from '@/lib/store'
import { createSlice } from '@reduxjs/toolkit'

export interface StoreData {
  value: string
}

const initialState: StoreData = {
  value: 'General Science'
}

export const storeDataSlice = createSlice({
  name: 'currentTab',
  initialState,
  reducers: {
    setCurrentTab: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { setCurrentTab } = storeDataSlice.actions
export const currentTabValue = (state: RootState) => state.currentTab.value

export default storeDataSlice.reducer
