import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'

import reducerUser from './ducks/user'
import reducerPosts from './ducks/posts'

const createRootReducer = () => combineReducers({
  posts: reducerPosts,
  user: reducerUser
})

const store = createStore(createRootReducer(), composeWithDevTools());

export { store };