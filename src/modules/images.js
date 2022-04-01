import { createAction, handleActions } from 'redux-actions';
import createRequestSaga from '../lib/createRequestSaga';
import * as imageAPI from '../lib/api/images';
import { takeLatest } from 'redux-saga/effects';

const LOAD_IMAGES = 'image/LOAD_IMAGE';
const LOAD_IMAGES_SUCCESS = 'image/LOAD_IMAGE_SUCCESS';
const LOAD_IMAGES_FAILURE = 'image/LOAD_IMAGE_FAILURE';

export const loadImages = createAction(
    LOAD_IMAGES, 
    keyword => keyword
);

const loadImagesSaga = createRequestSaga(LOAD_IMAGES, imageAPI.loadImages);
export function* imagesSaga() {
    yield takeLatest(LOAD_IMAGES, loadImagesSaga);
}

const initialState = {
    images: null,
    error: null,
}

const images = handleActions(
    {
        [LOAD_IMAGES_SUCCESS]: (state, {payload: images}) => ({
            ...state,
            images,
        }),
        [LOAD_IMAGES_FAILURE]: (state, {payload: error}) => ({
            ...state,
            error,
        })
    },
    initialState
)

export default images;