import _ from 'underscore';
import * as actions from './index';
import Routes from '../../constants/ApiRoutes';
import { showToast } from '../../helpers/ToastHelper';
import * as ApiCaller from '../../helpers/ApiCaller';
import { checkObjectEquality } from '../../helpers/utilityFunction';

export const setPreviewPost = data => {
    return {
        type: actions.SET_PREVIEW_POST_SUCCESS,
        post: data
    };
};

export const fetchPosts = () => {
    return async (dispatch, getState) => {
        try {
            const response = await ApiCaller.get(Routes.posts);
            if (!response.ok) throw Error(response.status);

            const posts = await response.json();
            const prevPosts = getState().posts.posts;

            const objectIsEqual = _.isEqual(prevPosts, posts);

            if (objectIsEqual) {
                dispatch({
                    type: actions.UPDATE_POSTS_FETCH_TIME
                });
            } else {
                dispatch({
                    type: actions.FETCH_POSTS,
                    posts: Array.isArray(posts) ? posts : []
                });
            }
        } catch (error) {
            showToast(error.message);
        }
    };
};

export const addPost = payload => {
    return async dispatch => {

        try {
            const response = await ApiCaller.post(Routes.posts, payload);
            if (!response.ok) throw Error(response.status);

            const post = await response.json();

            dispatch({
                type: actions.ADD_POST,
                post: post
            })
        } catch (error) {
            showToast(error.message);
            return;
        }
    };
};

export const updatePost = (id, payload) => {
    return async dispatch => {
        try {
            const response = await ApiCaller.put(Routes.posts, id, payload);
            if (!response.ok) throw Error(response.status);

            const updatedPost = await response.json();

            dispatch({
                type: actions.UPDATE_POST,
                post: updatedPost
            })
        } catch (error) {
            showToast(error.message);
        }
    };
};

export const deletePost = id => {
    return async dispatch => {
        try {
            const response = await ApiCaller.del(Routes.posts, id);
            if (response.ok) {
                dispatch({
                    type: actions.DELETE_POST,
                    id: id
                })
            } else {
                throw Error(response.status);
            }
        } catch (error) {
            showToast(error.message);
        }
    };
};