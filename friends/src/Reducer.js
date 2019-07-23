import {
    LOGIN,
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
    NEW_FRIEND,
    NEW_FRIEND_SUCCESS,
    NEW_FRIEND_FAILURE,
    DEL_FRIEND,
    DEL_FRIEND_SUCCESS,
    DEL_FRIEND_FAILURE,
  } from './actions'

const initialState = {
    friends: [],
    error: '',
    errorStatusCode: null,
    fetchingData: false,
    isLoggingIn: false,
    newFriend: false,
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN: {
            return {
                ...state,
                isLoggingIn: true
            }
        }
        case FETCH_DATA_START: {
            return {
                ...state,
                error: '',
                fetchingData: true
            }
        }
        case FETCH_DATA_SUCCESS: {
            return {
                ...state,
                error: '',
                fetchingData: false,
                friends: action.payload
            }
        }
        case FETCH_DATA_FAILURE: {
            return {
                ...state,
                errorStatusCode: action.payload.status
            }
        }
        case NEW_FRIEND:
        return { ...state, newFriend: true };
      case NEW_FRIEND_SUCCESS:
        return {
          ...state,
          newFriend: false,
          friends: [...state.friends, ...action.payload]
          
        }
      case NEW_FRIEND_FAILURE:
        return { ...state, newFriend: false, error: action.payload }

        case DEL_FRIEND:
                return { ...state, newFriend: true };
              case DEL_FRIEND_SUCCESS:
                return {
                  ...state,
                  newFriend: false,
                  friends: [...state.friends, ...action.payload]
                  
                }
              case DEL_FRIEND_FAILURE:
                return { ...state, newFriend: false, error: action.payload }

        default:
            return state
    }
}

export default reducer