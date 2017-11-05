import React from 'react'
import { NavLink } from 'react-router-dom'

const FilterLink = ({ filter, children, exact }) => (
  <NavLink
    exact={exact}
    to={`/${filter === 'all' ? '' : filter}`}
    style={{
      marginLeft: '5px',
      color: 'blue'
    }}
    activeStyle={{
      textDecoration: 'none',
      color: 'black'
    }}
    >
    {children}
  </NavLink>
)

export default FilterLink