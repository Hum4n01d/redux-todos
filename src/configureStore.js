import { createStore } from 'redux'
import throttle from 'lodash/throttle'

import { todos } from './reducers/reducers'
import { loadState, saveState } from './localStorage'

const configureStore = () => {
  const persistedState = loadState()

  const store = createStore(
    todos,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

  store.subscribe(throttle(() => {
    saveState(store.getState())
  }), 1000)

  return store
}

export default configureStore