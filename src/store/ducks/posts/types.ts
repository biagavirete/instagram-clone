export enum PostTypes {
  GET_POSTS = 'GET_POSTS'
}

export interface IPostItem {
  id: number,
  user: string,
  userPicture: string,
  postPicture: string,
  description: string,
  location: string,
  likes: number
}

export interface IPosts {
  postsList: IPostItem[]
}

export interface IPostsState {
  posts: IPosts
}