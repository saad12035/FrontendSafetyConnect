import {Checkbox, Grid} from "@mui/material"
import {styled} from "@mui/system"


export const ITitleContainer = styled(Grid)(({theme: {spacing,palette}}) => ({
        padding: spacing(4, 6),
    borderBottom:`1px solid ${palette.grey["200"]}`
    })
)


export const IListContainer = styled(Grid)(({theme: {spacing,palette}}) => ({
        padding: spacing(1, 2),
    borderBottom:`1px solid ${palette.grey["200"]}`
    })
)


export const CCheckbox = styled(Checkbox)(({theme: {spacing}}) => ({
    })
)

