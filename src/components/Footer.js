import React from 'react'

import FilterLink from './FilterLink'

const Footer = () => (
  <p>
    <span>Show:</span>

    <FilterLink filter='all' exact={true}>All</FilterLink>
    <FilterLink filter='active'>Active</FilterLink>
    <FilterLink filter='completed'>Completed</FilterLink>
  </p>
)

export default Footer