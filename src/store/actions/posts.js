import * as actions from './index';
import { showError } from '../../helpers';
import { baseUrl } from '../../constants/Config';

const postUrl = `${baseUrl}/posts`;

export const fetchPosts = () => {
    return async dispatch => {
        try {
            const response = await fetch(postUrl);
            const posts = await response.json();

            dispatch({
                type: actions.FETCH_POSTS,
                posts: Array.isArray(posts) ? posts : []
            });
        } catch (error) {
            showError(error.message);
        }
    };
};

export const addPost = (payload) => {
    return async dispatch => {
        try {
            const response = await fetch(postUrl, {
                method: 'POST',
                headers: { "Content-type": "application/json; charset=UTF-8" },
                body: JSON.stringify({ ...payload })
            });
            const post = await response.json();
            dispatch({
                type: actions.ADD_POST,
                post: post
            })
        } catch (error) {
            showError(error.message);
        }
    };
};

export const updatePost = (id, payload) => {
    return async dispatch => {
        try {
            const response = await fetch(`${postUrl}/${id}`, {
                method: 'PUT',
                headers: { "Content-type": "application/json; charset=UTF-8" },
                body: JSON.stringify({ ...payload })
            });
            const updatedPost = response.json();
            dispatch({
                type: actions.UPDATE_POST,
                post: updatedPost
            })
        } catch (error) {
            showError(error.message);
        }
    };
};

export const deletePost = id => {
    return async dispatch => {
        try {
            const response = await fetch(`${postUrl}/${id}`, {
                method: 'DELETE',
                headers: { "Content-type": "application/json; charset=UTF-8" },
            });
            const resData = await response.json();
            dispatch({
                type: actions.DELETE_POST,
                id: id
            });
        } catch (error) {
            showError(error.message);
        }
    };
};