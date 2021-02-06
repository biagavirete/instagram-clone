import { PostTypes, IPosts } from './types'

const initialStateUser: IPosts = {
  postsList: []
}

function reducerPosts(state = initialStateUser, action: any) {
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