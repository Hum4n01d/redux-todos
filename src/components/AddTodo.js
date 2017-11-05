import React from 'react'
import { connect } from 'react-redux'

import { addTodo } from '../actions/actions'

const AddTodo = ({ dispatch }) => {
  let input

  return (
    <form
      onSubmit={e => {
        e.preventDefault()

        dispatch(addTodo(input.value))

        input.value = ''
      }}
      style={{ display: 'inline-block' }}
    >
      <input
        ref={node => {
          input = node
        }}
      />
      <button type='submit'>Add</button>
    </form>
  )
}

export default connect()(AddTodo)