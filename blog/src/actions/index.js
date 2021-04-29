import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => {
    return async function(dispatch, getState) {
        const response = await jsonPlaceholder.get('/posts');
        
        dispatch({ type: 'FETCH_POSTS', payload: response.data });
    }
};

//Equivalent syntax
// export const fetchposts = () => async (dispatch) => {
//     const response = await jsomPlaceholder.get('/posts');
//     dispatch({ type: 'FETCH_POSTS', payload: response });
// }