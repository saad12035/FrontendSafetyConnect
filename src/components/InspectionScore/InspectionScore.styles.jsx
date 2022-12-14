//Core imports
import {Checkbox, Grid, Slider} from "@mui/material"
import {styled} from "@mui/system"


export const ITitleContainer = styled(Grid)(({theme: {spacing, palette}}) => ({
        padding: spacing(4, 6),
        borderBottom: `1px solid ${palette.grey["200"]}`
    })
)


export const IListContainer = styled(Grid)(({theme: {spacing, palette}}) => ({
        padding: spacing(1, 2),
        borderBottom: `1px solid ${palette.grey["200"]}`,
        maxHeight: 400,
        overflowY: "scroll"
    })
)
export const InspectionScoreSlider = styled(Slider)(() => ({
        opacity: 1,
        ".MuiSlider-thumb": {
           color:"transparent"
        },
        ".MuiSlider-track": {
            display: "none"
        },
        ".MuiSlider-rail": {
            display: "none"
        },
        backgroundImage: "linear-gradient(to right, red 40%, orange 80%,  green 90%)"
    })
)


export const CCheckbox = styled(Checkbox)(() => ({})
)

