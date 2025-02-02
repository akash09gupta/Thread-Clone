import { createSlice } from '@reduxjs/toolkit'

export const serviceSlice = createSlice({
  name: 'service',
  initialState: { 
    openAddPostModal: false, 
    openEditProfileModal: false,
    anchorE1: null, 
    anchorE2: null,
    darkMode: false,
    myInfo: null, 
  },
  reducers: {
    addPostModal: (state, action) => {
        state.openAddPostModal = action.payload;
    },
    editProfileModal: (state, action) => {
        state.openEditProfileModal = action.payload;
    },
    toggleMainMenu: (state, action) => {
      state.anchorE1 = action.payload;
    },
    toggleMyMenu: (state, action) => {
      state.anchorE2 = action.payload;
    },
    toggleColorMode: (state) => {
      state.darkMode = !state.darkMode;
    },
    addMyInfo: (state, action) => {
      state.myInfo = action.payload.me;
    },
    resetMyInfo: (state) => {
      state.myInfo = null; // Reset user information on logout
    },
  },
});

export const { 
  addPostModal, 
  editProfileModal, 
  toggleMainMenu, 
  toggleMyMenu, 
  toggleColorMode,
  addMyInfo,
  resetMyInfo, // Export the reset action
} = serviceSlice.actions;

export default serviceSlice.reducer;
