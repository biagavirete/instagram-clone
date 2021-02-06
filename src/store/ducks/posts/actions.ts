import { action } from 'typesafe-actions'
import { PostTypes, IPosts } from './types'

export const getPosts = (payload: IPosts) => action(PostTypes.GET_POSTS, payload);