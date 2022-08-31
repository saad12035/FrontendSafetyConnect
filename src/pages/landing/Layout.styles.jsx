import {Grid} from "@mui/material"
import {styled} from "@mui/system"


export const HomeGrid = styled(Grid)(({theme: {spacing}}) => ({
        padding: spacing(0, 2),
    })
)

export const ListGridItems = styled(Grid)(({theme: {palette}}) => ({
    border:`1px solid ${palette.grey["200"]}`
    })
)

