import {SAVE_COMMENT} from 'actions/types'
export function save_Comment(comment){
    return {
        type: SAVE_COMMENT,
        payload: comment
    }
}