import { configureStore } from "@reduxjs/toolkit"
import { authSlice } from "./slices/authSlice"
import notificationSlice from "./slices/notificationSlice"
import { playerSlice } from "./slices/playerSlice"
import { playlistSlice } from "./slices/playlistSlice"


export const store = configureStore({
    reducer: {
      auth: authSlice.reducer,
      notification: notificationSlice.reducer,
      player: playerSlice.reducer,
      playlist: playlistSlice.reducer,
    },
  })
  
  // Infer the `RootState` and `AppDispatch` types from the store itself
  export type RootState = ReturnType<typeof store.getState>
  // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
  export type AppDispatch = typeof store.dispatch
  
  