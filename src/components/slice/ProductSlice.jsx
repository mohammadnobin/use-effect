import { createSlice } from '@reduxjs/toolkit'

export const ProductSlice = createSlice({
  name: 'counter',
  initialState: {
    cartItem: 0,
  },
  reducers: {
    addToCart: (state,action) => {
        console.log(action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart } = ProductSlice.actions

export default ProductSlice.reducer