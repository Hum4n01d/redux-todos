import React from 'react'

import Todo from './Todo'

const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map(todo => (
      <Todo
        onClick={() => onTodoClick(todo.id)}
        text={todo.name}
        completed={todo.completed}
        key={todo.id}
      />
    ))}
  </ul>
)

export default TodoList