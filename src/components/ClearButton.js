import React from 'react'

import { connect } from 'react-redux'

import { clearTodos } from '../actions/actions'

const ClearButton = ({ dispatch }) => (
  <button
    onClick={() => {
      dispatch(clearTodos())
    }}
  >Clear</button>
)

export default connect()(ClearButton)