import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import { login, loginParams } from "../api/authApi";
import { Dispatch } from 'redux';

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
    token: T
}

interface IState {
    authInfo: IAuthInfo<nullOrNumber, nullOrString>
}

const intialState: IState = {
    authInfo: {
        id: null,
        first_name: null,
        last_name: null,
        username: null,
        email: null,
        birth_date: null,
        gender: null,
        token: null
    }
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: intialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<IAuthInfo<number, string>>) => {
            state.authInfo = action.payload
        }
    }
})


export const { setAuthData } = authSlice.actions;

export const loginAction = (data: loginParams) => (dispatch: Dispatch) => {
    login(data).then(response => {
        dispatch(setAuthData(response.data))
    })
}

