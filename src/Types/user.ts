export interface User {
  uid: number
  address: string
  role: string
  avatar: string
  name: string
  bio?: string
  createdAt: string
  updatedAt: string
}

export interface IUser {
  id: number
  address: string
  role: string
  updatedAt: string
  createdAt: string
}