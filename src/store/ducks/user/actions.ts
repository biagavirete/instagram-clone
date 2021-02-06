import { action } from 'typesafe-actions'
import { UserTypes, IUser } from './types'

export const getUser = (payload: IUser) => action(UserTypes.GET_USER, payload);