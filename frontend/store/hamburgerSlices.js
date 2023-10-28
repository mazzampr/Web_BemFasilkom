import { createSlice } from '@reduxjs/toolkit'

export const navbarSlice = createSlice({
  name: 'hamburgerMode',
  initialState: {
    value: false,
  },
  reducers: {
    setStateNavbar: (state) => {
      state.value = !state.value
    },
  },
})

export const {setStateNavbar} = navbarSlice.actions

export default navbarSlice.reducer 