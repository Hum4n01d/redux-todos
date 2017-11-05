import React from 'react'

const Todo = ({ id, onClick, completed, text }) => (
  <li
    key={id}
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
)

export default Todo