import { createTheme, responsiveFontSizes } from "@mui/material";


export let theme = createTheme({
    typography :{
        fontFamily: 'Roboto Mono, monospace',
    }
})
theme = responsiveFontSizes(theme, {factor : 3})


