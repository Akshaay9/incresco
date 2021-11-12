import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: true,
  products: [],
  sortData: {
    price: "",
    rating: "",
    year: "",
  },
  filterData: {
    gender: [],
    category: [],
    brand: [],
  },
  searchInput: "",
};

export const getAllProducts = createAsyncThunk(
  "products",
  async (url, { rejectWithValue }) => {
    try {
      const data = await axios.get(url);
      console.log(data.data);

      return data.data.products;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducer: {
    //   sort reducers
    sortByPrice: (state, { payload }) => {},
    sortByRating: (state, { payload }) => {},
    sortByYear: (state, { payload }) => {},
    // filter reducers
    filterByGender: (state, { payload }) => {},
    filterByCategory: (state, { payload }) => {},
    filterByBrand: (state, { payload }) => {},
    // search by text
    searchByText: (state, { payload }) => {},
  },
  extraReducers: {
    [getAllProducts.pending]: (state, action) => {
      state.loading = true;
    },
    [getAllProducts.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.products = payload;
    },
  },
});
export const {
  sortByPrice,
  sortByRating,
  sortByYear,
  filterByGender,
  filterByCategory,
  filterByBrand,
  searchByText,
} = productSlice.actions;

export default productSlice.reducer;
