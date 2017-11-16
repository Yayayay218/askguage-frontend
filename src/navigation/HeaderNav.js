import React from 'react'
import { NavLink } from 'react-router-dom'

const HeaderNav = ({ filter, children, className }) => (
    <NavLink
        className={className}
        to={filter === 'full-match' ? '/' : `/${ filter }`}
        activeStyle = {{
            color: 'white'
        }}
    >
        {children}
    </NavLink>
)

export default HeaderNav