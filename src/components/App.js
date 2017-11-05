import React from 'react'
import { Route } from 'react-router-dom'

import AddTodo from './AddTodo'
import ClearButton from './ClearButton'
import VisibleTodoList from './VisibleTodoList'
import Footer from './Footer'

const TodoApp = ({ params }) => (
  <div>
    <AddTodo />
    <ClearButton />
    
    <Route path='/:filter?' component={VisibleTodoList}/>

    <Footer />
  </div>
)

export default TodoApp