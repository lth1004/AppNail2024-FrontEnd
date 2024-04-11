export interface IUserInfo {
  id: number
  createdAt: string
  updatedAt: string
  username: string
  email: string | null
  phoneNumber: string | null
  firstName: string | null
  lastName: string | null
  province: string | null
  district: string | null
  ward: string | null
  address: string | null
  birthDay: string | null
  avatar: string
  status: string | null
  gender: string | null
  isActive: boolean
}
export const initUserInfo: IUserInfo = {
  id: 1,
  createdAt: '',
  updatedAt: '',
  username: '',
  email: null,
  phoneNumber: null,
  firstName: null,
  lastName: null,
  province: null,
  district: null,
  ward: null,
  address: null,
  birthDay: null,
  avatar: '',
  status: null,
  gender: null,
  isActive: true
};