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
