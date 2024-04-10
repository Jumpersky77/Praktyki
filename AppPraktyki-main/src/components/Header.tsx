import { useState } from "react";
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton';

type Props = { accountName: string, subscriptionDaysLeft: string }
function Header(props : Props) {
    return (
        <div id="header">
            <IconButton size="large">
                <HomeIcon fontSize="large" />
            </IconButton>
            <button>Konto: {props.accountName}</button>
            <button>Subskrypcja ({props.subscriptionDaysLeft})</button>
            <IconButton size="large">
                <LogoutIcon fontSize="large" />
            </IconButton>
        </div>
    )
}
export default Header;