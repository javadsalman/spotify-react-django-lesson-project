import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import { IRegisterParams, login, loginParams, register } from "../../api/authApi";
import { Dispatch } from 'redux';
import { setToast } from "./notificationSlice";
import { setTokenToAxios } from "../../api/iaxios";
import { IAuthInfo } from "../../types";

type authStatusType = 'notChecked' | 'loggedIn' | 'loggedOut'

interface IState {
    authStatus: authStatusType,
    authInfo: IAuthInfo
}

const intialState: IState = {
    authStatus: 'notChecked',
    authInfo: {
        id: 0,
        user_id: 0,
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        birth_date: '',
        gender: '',
        token: '',
        remember_me: false,
    }
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: intialState,
    reducers: {
        setAuthInfo: (state, action: PayloadAction<IAuthInfo>) => {
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
    // remove user related data from local storage
    localStorage.removeItem('authInfo')
    localStorage.removeItem('lastPlayingInfo')
}

export const checkAuthAction = () => (dispatch: Dispatch) => {
    const authInfo = JSON.parse(localStorage.getItem('authInfo')!)
    if (authInfo) {
        dispatch(setAuthInfo(authInfo))
        dispatch(setAuthStatus('loggedIn'))
        // set token to axios instance
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
        setTokenToAxios(response.data.token)
    }).catch(error => {
        const [errorType, [errorMessage]] = Object.entries(error.response.data)[0] as [string, [string]]
        dispatch(setToast({ open: true, type: 'error', message: `${errorType} - ${errorMessage}` }))
    })
}
