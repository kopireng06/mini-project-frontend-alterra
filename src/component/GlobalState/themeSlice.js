import { createSlice } from '@reduxjs/toolkit'
import { lightTheme,darkTheme } from './theme';

export const checkThemeValueFromLocalStorage = (theme)=>{
    const defaultTheme = JSON.parse(localStorage.getItem("theme"));
    if(defaultTheme===null){
        return theme
    }
    else{
        return defaultTheme
    }
}

export const checkThemeModeFromLocalStorage = ()=>{
    const defaultTheme = JSON.parse(localStorage.getItem("theme"));
    if(defaultTheme===null){
        return "light"
    }
    else {
        if(defaultTheme.body==="rgb(5, 22, 34)"){
            return "dark"
        }
        else{
            return "light"
        }
    }
}

const initialState = {
    value:checkThemeValueFromLocalStorage(lightTheme),
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state,action) => {
        switch(action.payload){
            case "dark":
                state.value = darkTheme;
                localStorage.setItem("theme", JSON.stringify(darkTheme));
                break;
            case "light":
                state.value = lightTheme;
                localStorage.setItem("theme", JSON.stringify(lightTheme));
                break;
            default:
                break;
        }
    }
  },
})

export const { changeTheme } = themeSlice.actions

export default themeSlice.reducer