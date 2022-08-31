import {createTheme} from "@mui/material";
import createPalette from "@mui/material/styles/createPalette";
import {GhostWhite, Grey, KellyGreen, RedSalsa, TrueBlue} from "./colors";

const palette = createPalette({
    primary: TrueBlue,
    secondary: GhostWhite,
    error: RedSalsa,
    success: KellyGreen,
    grey: Grey,
})

export const theme = createTheme({
    palette,
    typography: {
        fontFamily: [
            "lato",
            "-apple-system",
            "BlinkMacSystemFont",
            "Segoe UI",
            "Roboto",
            "Helvetica Neue",
            "Arial",
            "sans-serif",
            "Apple Color Emoji",
            "Segoe UI Emoji",
            "Segoe UI Symbol"
        ].join(","),
        subtitle2: {
            lineHeight: 1.2
        },
        h6: {
            fontSize: "0.8rem",
            fontWeight: "600"
        }
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    scrollbarColor: "black",
                    "*::-webkit-scrollbar": {
                        width: "1px",
                        color:"black",
                    },
                    "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
                        width:"1px",
                        backgroundColor:"white",
                    },
                    "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
                        borderRadius: 8,
                        backgroundColor: "white",
                        minHeight: 24,
                        border: "3px solid #2b2b2b",
                    },

                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: ({ownerState, theme}) => ({
                    textTransform: "none",
                    letterSpacing: "0.55px",
                    boxShadow: "none",
                    fontWeight: "bold",
                    whiteSpace: 'nowrap',
                    "&:hover": {
                        boxShadow: "none"
                    }
                }),
                containedSizeMedium: ({ownerState, theme}) => ({
                    height: 45,
                    padding: theme.spacing(1.3, 3)
                })
            }
        }
    },
})