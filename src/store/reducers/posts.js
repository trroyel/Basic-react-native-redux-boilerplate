import * as actions from '../actions';

const initialState = {
    posts: [],
    updatedAt: 0,
    previewPost: {},
};

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.FETCH_POSTS: {
            return {
                ...state,
                posts: action.posts,
                updatedAt: Date.now()
            };
        };
        case actions.ADD_POST: {
            return {
                ...state,
                posts: state.posts.concat(action.post),
                previewPost: {}
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

        case actions.SET_PREVIEW_POST_SUCCESS: {
            return {
                ...state,
                previewPost: action.post
            };
        };

        default: return state;
    }
};

export default postReducer;