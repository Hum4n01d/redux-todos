import { v4 } from 'uuid'

export const addTodo = (text) => ({
  type: 'ADD_TODO',
  name: text,
  id: v4()
})

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})

export const clearTodos = () => ({
  type: 'CLEAR_TODOS'
})