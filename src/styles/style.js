import { createTheme, responsiveFontSizes } from "@mui/material";


export let theme = createTheme({
    typography :{
        fontFamily: 'Open Sans, sans-serif'
    }
})
theme = responsiveFontSizes(theme, {factor : 3})


