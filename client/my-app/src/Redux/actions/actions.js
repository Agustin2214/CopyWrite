import axios from "axios"

export const POST_IECHO = 'POST_IECHO'
const url = 'https://copywritechallenge.herokuapp.com' 



export const postIecho = (text) => {
    console.log(text)
    return async function (dispatch) {
      return axios.get(`${url}/iecho?text=${text}`)
      .then(response => {
        dispatch({ type: POST_IECHO, payload: response.data });
      })
      .catch(err => console.error(err))
    };
}