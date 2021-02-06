import { PostTypes, IPosts } from './types'

const initialStatePosts: IPosts = {
  postsList: []
}

function reducerPosts(state = initialStatePosts, action: any) {
  switch (action.type) {
    case PostTypes.GET_POSTS:
      return {
        ...state,
        postsList: action.payload
      }
    default:
      return state
  }
}

export default reducerPosts;