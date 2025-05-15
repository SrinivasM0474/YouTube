import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheResults: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { cacheResults } = searchSlice.actions;
export default searchSlice.reducer;

/***
 * Cache
 *
 * time complexity to search in array = O(n)
 * time complexity to search in Object/map/hashmap = O(1)
 *
 * [i,ip,iph,iphone]
 *
 * {
 *  i:
 *  ip:
 *  iph:
 *  iphone:
 * }
 *
 *
 */
