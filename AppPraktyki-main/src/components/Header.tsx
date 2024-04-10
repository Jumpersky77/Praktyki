import { useState } from "react";
import { Link } from "react-router-dom";

type Props = { accountName: string, subscriptionDaysLeft: string }
function Header(props : Props) {
    return (
        <div id="header">
            <a href="/subjects">Dom</a>
            <button>Konto: {props.accountName}</button>
            <button>Subskrypcja ({props.subscriptionDaysLeft})</button>
            <button>Wyloguj</button>
        </div>
    )
}
export default Header;