import React from 'react'
import { Link } from 'react-router-dom'
import './NavItem.css'

function NavItem({to, label}) {
    return (
        <>
            <li>
                <Link className='link' to={to}><strong>{label}</strong></Link>
            </li>
        </>
    )
}

export default NavItem