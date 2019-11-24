import axios from 'axios';

const URL = 'https://jsonplaceholder.typicode.com/posts';

export const getPosts = () => (dispatch) => {
         console.log('get posts');
       axios.get(URL)
            .then(res => dispatch({
                type: 'GET_POSTS',
                payload: res.data
            }))

}

export const getOnePost = (id) => async (dispatch) => {
     
  try {
    let res = await axios.get(`${URL}/${id}`);

    return dispatch({
      type: 'GET_ONE_POST',
      payload: res.data
    })
    
  } catch (error) {
     console.log()
  }
}
