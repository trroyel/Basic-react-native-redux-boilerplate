import * as actions from '../actions';

const initialState = {
    posts: [],
    updated: 0
};

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.FETCH_POSTS: {
            return {
                ...state,
                posts: action.posts,
                updated: Date.now()
            };
        };
        case actions.ADD_POST: {
            return {
                ...state,
                posts: state.posts.concat(action.post)
            };
        };
        case actions.DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.id)
            };
        };
        case actions.UPDATE_POST: {
            const posts = [...state.posts];
            const index = posts.findIndex(post => post.id === action.post.id);

            if (index !== -1) {
                posts[index] = {
                    ...posts[index],
                    ...action.post
                };
            }
            return {
                ...state,
                posts: posts
            }
        };

        default: return state;
    }
};

export default postReducer;