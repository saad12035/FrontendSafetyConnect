import {AppBar, Box,Toolbar,TextField} from "@mui/material"
import {styled} from "@mui/system"


export const SHeaderAppBar = styled(AppBar)(
    ({theme: {spacing}}) => ({
        backgroundColor: "rgb(17, 37, 101)",
        padding: spacing(0, 4)
    })
)

export const SHeaderToolbar = styled(Toolbar)(({theme: {spacing}}) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: spacing(2, 0)
}))
export const SBox = styled(Box)(({theme: {spacing}}) => ({
    justifyContent: "right",
    gap: spacing(1.5)
}))
export const HBox = styled(Box)(({theme: {spacing}}) => ({
    alignItems: "flex-end",
    textAlign: "center",
    gap: spacing(1.5),
}))
export const HTextField = styled(TextField)(() => ({
    color:"white",
    backgroundColor:"rgb(55, 72, 126)",
    borderRadius:"5px",
    width:"90%",
    marginRight:"1.5rem",
    input: {
        color: "white"
    },
    label:{
        color:"white"
    },
    "& .MuiOutlinedInput-notchedOutline": {
        border: "none"
    },
    "&.Mui-focused": {
        "& .MuiOutlinedInput-notchedOutline": {
            border: "none"
        }
    }
}))

