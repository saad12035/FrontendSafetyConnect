//Core imports
import {MenuItem, Select, Typography} from "@mui/material";

//Local imports
import {AssignmentIcon, HealingIcon, HomeIcon, ListAltIcon, SplitscreenIcon} from "./icons";


export const inspectionDetails = [
    {
        primaryText: "Physical condition of body is good & sound. ",
        secondaryText: "Dust and Dirt shall be removed.",
        status: "Yes",
        color: "green",
    },
    {
        primaryText: "Physical condition of body is good & sound. ",
        secondaryText: "Dust and Dirt shall be removed.",
        status: "N/A",
        color: "grey",
    },
    {
        primaryText: "Physical condition of body is good & sound. ",
        secondaryText: "Dust and Dirt shall be removed.",
        status: "No",
        color: "red",
    },
    {
        primaryText: "Physical condition of body is good & sound. ",
        secondaryText: "Dust and Dirt shall be removed.",
        status: "Yes",
        color: "green",
    },

    {
        primaryText: "Physical condition of body is good & sound. ",
        secondaryText: "Dust and Dirt shall be removed.",
        status: "Yes",
        color: "green",
    },
    {
        primaryText: "Physical condition of body is good & sound. ",
        secondaryText: "Dust and Dirt shall be removed.",
        status: "Yes",
        color: "green",
    },
    {
        primaryText: "Physical condition of body is good & sound. ",
        secondaryText: "Dust and Dirt shall be removed.",
        status: "Yes",
        color: "green",
    },
]
export const itemsDetails = [
    {
        title: "Inspection Id :",
        value: "112233"
    },
    {
        title: "Identification Number:",
        value: "EV-01"
    },
    {
        title: "Project:",
        value: "Truck Loading Silo"
    },
    {
        title: "Location:",
        value: "Silo-2 "
    },
    {
        title: "Due Date:",
        value: "Mar 8, 2021 10:30 am"
    },
    {
        title: "Inspection Date:",
        value: "Mar 8, 2021 10:30 am"
    },
]
export const submissionDetails = [
    {
        title: "Inspection By: ",
        inputType: <Typography>Saad Ali Ahsan</Typography>,
    },
    {
        title: "Submitted To: ",
        inputType:
            <Select
                id="submitted-to"
                label="Age"
                size="small"
                color="primary"
                defaultValue={10}
                disabled={true}
            >
                <MenuItem value={10}>Mubasshir</MenuItem>
            </Select>,
    },
    {
        title: "Status: ",
        inputType: <Typography>Pending Approval</Typography>,
    },
]
export const menuItems = [
    {
        title: "Home ",
        icon: <HomeIcon/>,
    },
    {
        title: "My Responsibilities",
        icon: <ListAltIcon/>,
    },
    {
        title: "Observation & Feedback",
        icon: <HealingIcon/>,
    },
    {
        title: "Learning Management",
        icon: <SplitscreenIcon/>,
    },
    {
        title: "Incident Management",
        icon: <AssignmentIcon/>,
    },
]
export const projectItems = [
    {
        title: "Alpha Projects",
        icon: <HomeIcon/>,
    },
    {
        title: "Beta Projects",
        icon: <ListAltIcon/>,
    },
]

export const breadcrumbs = [
    {
        text: "Inspection >", color: "secondary.900"
    },
    {
        text: "In Progress >", color: "secondary.900"
    },
    {
        text: "Inspection#112233 >", color: "secondary.900"
    },
    {
        text: "Electrical Vibrator -EV04 >", color: "success.700"
    },
]