import {SAVE_COMMENT,FETCH_COMMENT} from 'actions/types'

export default function(state = [],action){
    switch (action.type) {
        case SAVE_COMMENT:
            return [...state,action.payload]
        case FETCH_COMMENT:
            const comments = action.payload.data.slice(0,20).map(data => {
                return data.name
            })
            return [...state,...comments]
        default:
            return state;
    }
}