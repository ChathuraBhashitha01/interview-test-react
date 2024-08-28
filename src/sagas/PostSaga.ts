import {call ,put ,takeEvery} from "redux-saga/effects"
import {fetchPostsSuccess} from "../state/post/PostSlice";

function* getPostFetch(){
    const  post= yield call(()=>fetch("https://jsonplaceholder.typicode.com/posts"));
    const jsonFormat= yield post.json;
    yield put(fetchPostsSuccess(jsonFormat))
}

function* postSaga(){
    yield takeEvery('posts/fetchPostsRequest', getPostFetch)
}

export default postSaga;