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
    gender: "",
    category: [],
    brand: [],
  },
  searchInput: "",
  category:[]
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
  reducers: {
    //   sort reducers
    sort: (state, { payload }) => {
      let { sortCategory, sortValue } = payload;
      state.sortData[sortCategory] = sortValue;
    },
    //clear sort
    clearSort: (state) => {
      state.sortData = {
        price: "",
        rating: "",
        year: "",
      };
    },
    // filter reducers for gender
    filterByGender: (state, { payload }) => {
      let { filterCategory, filterValue } = payload;
      state.filterData[filterCategory] = filterValue;
    },
    // filter by brand and category
    filter: (state, { payload }) => {
      let { filterCategory, filterValue } = payload;

      let filteredStateCategory = state.filterData[filterCategory];

      filteredStateCategory = filteredStateCategory.includes(filterValue)
        ? filteredStateCategory.filter((ele) => ele !== filterValue)
        : [...filteredStateCategory, filterValue];

      state.filterData[filterCategory] = filteredStateCategory;
    },
    // clear all filter
    clearFilter: (state) => {
      state.filterData = {
        gender: "",
        category: [],
        brand: [],
      };
    },

    // select all filter
    selectAllFilter: (state, { payload }) => {
      let { gender, category, brand } = payload;
      state.filterData = {
        gender,
        category,
        brand,
      };
    },

    // search by text
    searchByText: (state, { payload }) => {
      console.log("called");
      state.searchInput = payload;
    },
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
  sort,
  clearSort,
  filterByGender,
  filter,
  clearFilter,
  selectAllFilter,
  searchByText,
} = productSlice.actions;

export default productSlice.reducer;
