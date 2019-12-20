import {SAVE_COMMENT, FETCH_COMMENT} from 'actions/types'
import axios from 'axios'
export function save_Comment(comment){
    return {
        type: SAVE_COMMENT,
        payload: comment
    }
}

export function fetchComments(){
    const response = axios.get('http://jsonplaceholder.typicode.com/comments')
    return {
        type: FETCH_COMMENT,
        payload: response
    }
}