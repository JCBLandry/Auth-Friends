import axios from "axios"
export const LOGIN = "LOGIN"
export const FETCH_DATA_START = "FETCH_DATA_START"
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS"
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE"

export const login = data => dispatch => {
  dispatch({ 
      type: LOGIN
     })
  return axios
    .post('http://localhost:5000/api/login', data)
    .then(res => localStorage.setItem("token", res.data.payload))
}

export const getData = () => dispatch => {
  dispatch({ 
      type: FETCH_DATA_START
     })
  axios
    .get('http://localhost:5000/api/friends', {
      headers: { Authorization: localStorage.getItem('token') }
    })
    .then(res => {
      dispatch({ 
          type: FETCH_DATA_SUCCESS, 
          payload: res.data })
    })
    .catch(err => {
      if (err.response.status === 403) {
        localStorage.removeItem('token')
      }
      dispatch({ 
          type: FETCH_DATA_FAILURE, 
          payload: err.response 
        })
    })
}

export const NEW_FRIEND = 'NEW_FRIEND';
export const NEW_FRIEND_SUCCESS = 'NEW_FRIEND_SUCCESS';
export const NEW_FRIEND_FAILURE = 'NEW_FRIEND_FAILURE';

export const addFriend = friend => dispatch => {

  dispatch({ type: NEW_FRIEND });
  axios
    .post(url, friend)

    .then(({ data }) => dispatch(
      {
        type: NEW_FRIEND_SUCCESS,
        payload: data
      }
    ))
    
    .catch(({ data }) => dispatch(
      {
        type: NEW_FRIEND_FAILURE,
        payload: data
      }
    ))
}
