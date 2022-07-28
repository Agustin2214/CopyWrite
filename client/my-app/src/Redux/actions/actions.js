import axios from "axios"

export const POST_IECHO = 'POST_IECHO'



export const postIecho = (text) => {
    console.log(text)
    return async function (dispatch) {
      return axios.get(`http://localhost:3001/iecho?text=${text}`)
      .then(response => {
        dispatch({ type: POST_IECHO, payload: response.data });
      })
      .catch(err => console.error(err))
    };
}