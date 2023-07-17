import { reducerCases } from "./Constants";

export const initialState = {
    token: null,    
    playlists:[],
    userInfo : null,
    selectedPlaylistId:"7zvY4guQTcJXgm3RcYb8i6",
    selectedPlaylists:null,
    currentPlaying:null,
    playerState:false
}

const reducer = (state, action) => {
    // console.log(state);
    // console.log(action);
    switch (action.type) {
        case reducerCases.SET_TOKEN: {
            return {
                ...state, token:action.token
            }
        }
        case reducerCases.SET_PLAYLISTS:{
            return {
                ...state,playlists:action.playlists
            }
        }
        case reducerCases.SET_USERS:{
            return {
                ...state,userInfo:action.userInfo
            }
        }
        case reducerCases.SET_PLAYLIST:{
            return{
                ...state,selectedPlaylists:action.selectedPlaylists
            }
        }
        case reducerCases.SET_PLAY:{
            return {
                ...state,currentPlaying:action.currentPlaying
            }
        }
        case reducerCases.SET_PLAYLIST_ID:{
            return {
                ...state,selectedPlaylistId:action.selectedPlaylistId
            }
        }
        case reducerCases.SET_PLAYER_STATE:{
            return {
                ...state,playerState:action.playerState
            }
        }
        default: return state;
    }
}

export default reducer;