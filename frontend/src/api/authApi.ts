import { IAuthInfo, ICustomerProfile } from "../types"
import iaxios from "./iaxios"

export type loginParams = {user_info: string, password: string, remember_me: boolean}

export function login(data: loginParams) {
    return iaxios.post<IAuthInfo>('/login/', data)
}

export interface IRegisterParams {
    first_name: string,
    last_name: string,
    username: string,
    email: string,
    password: string,
    gender: string,
    birth_date: string,
}

export function register(data: IRegisterParams) {
    return iaxios.post<IAuthInfo>('/register/', data)
}


export function getProfile() {
    return iaxios.get<ICustomerProfile>('/customer-profile/')
}

export function uploadProfilePhoto(file: File) {
    const formData = new FormData()
    formData.append('image', file)
    return iaxios.patch('/customer-image-upload/', formData)
}