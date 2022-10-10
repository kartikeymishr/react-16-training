import jsonPlaceholder from "../apis/JSONPlaceholder";

/*export const fetchPost = async () => {
    // Bad Approach ~ Breaking the rules of an action creator
    const promise = await jsonPlaceholder.get('/posts')

    return {
        type: 'FETCH_POSTS',
        payload: promise
    }
}*/

export const fetchPost = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts')

    dispatch({type: 'FETCH_POST', payload: response})
}
