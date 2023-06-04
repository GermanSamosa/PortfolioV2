import React from 'react'
import { Link } from 'react-router-dom'
import './NavItem.css'

function NavItem({to, label}) {
    return (
        <>
            <li>
                <Link to={to}>{label}</Link>
            </li>
        </>
    )
}

export default NavItem