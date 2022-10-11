import _ from "lodash";

import jsonPlaceholder from "../apis/JSONPlaceholder";

/*export const fetchPostAction = async () => {
    // Bad Approach ~ Breaking the rules of an action creator
    const promise = await jsonPlaceholder.get('/posts')

    return {
        type: 'FETCH_POSTS',
        payload: promise
    }
}*/

export const fetchPostAction = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts')

    dispatch({type: 'FETCH_POST', payload: response.data})
}

// Memoized solution to prevent over-fetching by caching
/*export const fetchUserAction = (id) => dispatch => {
    _fetchUser(id, dispatch);
}

const _fetchUser = _.memoize(async (id, dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`)

    dispatch({type: 'FETCH_USER', payload: response.data})
})*/

export const fetchUserAction = id => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`)

    dispatch({type: 'FETCH_USER', payload: response.data})
}

export const fetchPostAndUserAction = () => async (dispatch, getState) => {
    // Load all posts
    await dispatch(fetchPostAction())

    // Find unique UserIds and fetch users
    const userIds = _.uniq(_.map(getState().posts, 'userId'))
    userIds.forEach(id => dispatch(fetchUserAction(id)))

    // Chaining with lodash
    // _.chain(getState().posts).map('userId').uniq().forEach(id => dispatch(fetchUserAction(id))).value()
}
