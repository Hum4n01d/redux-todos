import { connect } from 'react-redux'

import TodoList from './TodoList'
import { getVisibleTodos } from '../reducers/reducers'
import { toggleTodo } from '../actions/actions'

const mapStateToProps = (state, { match: {params: {filter}}}) => {
  return ({
  todos: getVisibleTodos(
    state, 
    filter || 'all'
  )
})}

const mapDispatchToProps = (dispatch) => ({
  onTodoClick(id) {
    dispatch(toggleTodo(id))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)