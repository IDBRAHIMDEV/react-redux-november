
const initState = {
    posts: []
}

export default (state = initState, action) => {

    switch(action.type) {
        case 'GET_POSTS': 
            return {
                ...state,
                posts: action.payload
            }
        case 'GET_ONE_POST':
            return {
                ...state,
                posts: [action.payload]
            }
        case 'ADD_POST':
                return {
                    ...state,
                    posts: [action.payload, ...state.posts]
                }
        default:
            return state
    }

}