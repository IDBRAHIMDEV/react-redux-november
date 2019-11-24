import axios from 'axios';

const URL = 'http://localhost:5000/posts';

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

export const addPost = (post) => (dispatch) => {

    axios.post(URL, post)
         .then(res => {
           return dispatch({
             type: 'ADD_POST',
             payload: res.data
           })
         })
         .catch(err => console.error(err))
} 
