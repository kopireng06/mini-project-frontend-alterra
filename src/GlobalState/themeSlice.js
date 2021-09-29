import { createSlice } from '@reduxjs/toolkit'

//initial
const lightTheme = {
    body: '#FFFFFF',
    text: 'initial',
    textWithInitial: 'initial',
    darkBlue:'#0007B0',
    gray:"rgb(107, 114, 128)",
    shadowCustom:"rgb(0 0 0 / 7%) 0px 2px 10px 0px, rgb(0 0 0 / 9%) 0px -1px 5px 0px"
}
  
const darkTheme = { 
    body: 'rgb(5, 22, 34) ',
    text: '#FFFFFF',
    textWithInitial: '#FFFFFF',
    darkBlue:'#FFFFFF',
    gray:"rgb(200, 200, 200)",
    shadowCustom:"rgb(255 255 255/ 7%) 0px 2px 10px 0px, rgb(255 255 255 / 9%) 0px -1px 5px 0px"
}

const initialState = {
    value:lightTheme
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state,action) => {
        switch(action.payload){
            case "dark":
                state.value = darkTheme;
                break;
            case "light":
                state.value = lightTheme;
                break;
            default:
                break;
        }
    }
  },
})

export const { changeTheme } = themeSlice.actions

export default themeSlice.reducer