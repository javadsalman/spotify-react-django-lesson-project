

// interface loginType <T, V>{user_info: T, password: V}
// export function login({user_info, password}: loginType<string, number>) {

import iaxios from "./iaxios"

// }

export type loginParams = {user_info: string, password: string, remember_me: boolean}
export interface ILoginReturn {
    id: number,
    first_name: string,
    last_name: string,
    username: string,
    email: string,
    birth_date: string,
    gender: string,
    token: string
}
export function login(data: loginParams) {
    return iaxios.post<ILoginReturn>('/login/', data)
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
export interface IRegisterReturn extends IRegisterParams {
    token: string,
    id: number
}
export function register(data: IRegisterParams) {
    return iaxios.post<IRegisterReturn>('/register/', data)
}
