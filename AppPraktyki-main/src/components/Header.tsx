import { useState } from "react";
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';

type Props = { accountName: string, subscriptionDaysLeft: string }
function Header(props : Props) {
    return (
        <div id="header">
            <a href="/subjects"><HomeIcon fontSize={"large"}/></a>
            <button>Konto: {props.accountName}</button>
            <button>Subskrypcja ({props.subscriptionDaysLeft})</button>
            <button><LogoutIcon fontSize={"large"}/></button>
        </div>
    )
}
export default Header;