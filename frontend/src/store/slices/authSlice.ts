import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import { IRegisterParams, login, loginParams, register } from "../../api/authApi";
import { Dispatch } from 'redux';
import { setToast } from "./notificationSlice";
import { removeTokenFromAxios, setTokenToAxios } from "../../api/iaxios";

type nullOrString = string | null
type nullOrNumber = number | null

interface IAuthInfo<I, T> {
    id: I,
    first_name: T,
    last_name: T,
    username: T,
    email: T,
    birth_date: T,
    gender: T,
    token: T,
    remember_me?: T
}
type authStatusType = 'notChecked' | 'loggedIn' | 'loggedOut'


interface IState {
    authStatus: authStatusType,
    authInfo: IAuthInfo<nullOrNumber, nullOrString>
}

const intialState: IState = {
    authStatus: 'notChecked',
    authInfo: {
        id: null,
        first_name: null,
        last_name: null,
        username: null,
        email: null,
        birth_date: null,
        gender: null,
        token: null,
        remember_me: null,
    }
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: intialState,
    reducers: {
        setAuthInfo: (state, action: PayloadAction<IAuthInfo<number, string>>) => {
            state.authInfo = action.payload
            state.authStatus = 'loggedIn'

        },
        setAuthStatus: (state, action: PayloadAction<authStatusType>) => {
            state.authStatus = action.payload
        },
        setLogout: (state) => {
            state.authStatus = 'loggedOut'
            state.authInfo = intialState.authInfo
        }
    }
})


export const { setAuthInfo, setAuthStatus, setLogout  } = authSlice.actions;

export const logoutAction = () => (dispatch: Dispatch) => {
    dispatch(setLogout())
    localStorage.removeItem('authInfo')
}

export const checkAuthAction = () => (dispatch: Dispatch) => {
    const authInfo = JSON.parse(localStorage.getItem('authInfo')!)
    if (authInfo) {
        dispatch(setAuthInfo(authInfo))
        dispatch(setAuthStatus('loggedIn'))
        setTokenToAxios(authInfo.token)
    } else {
        dispatch(setAuthStatus('loggedOut'))
    }
}

export const loginAction = (data: loginParams) => (dispatch: Dispatch) => {
    login(data).then(response => {
        dispatch(setAuthInfo(response.data))
        dispatch(setToast({ open: true, type: 'success', message: 'Ugurla giris edildi!' }))
        dispatch(setAuthStatus('loggedIn'))
        if (data.remember_me) {
            localStorage.setItem('authInfo', JSON.stringify(response.data))
        }
        setTokenToAxios(response.data.token)
    }).catch(error => {
        dispatch(setToast({ open: true, type: 'error', message: error.response.data.message }))
    })
}

export const registerAction = (data: IRegisterParams) => (dispatch: Dispatch) => {
    register(data).then(response => {
        dispatch(setAuthInfo(response.data))
        dispatch(setToast({ open: true, type: 'success', message: 'Ugurla qeydiyyatdan kecdiniz!' }))
        dispatch(setAuthStatus('loggedIn'))
        removeTokenFromAxios()
    }).catch(error => {
        const [errorType, [errorMessage]] = Object.entries(error.response.data)[0] as [string, [string]]
        dispatch(setToast({ open: true, type: 'error', message: `${errorType} - ${errorMessage}` }))
    })
}
