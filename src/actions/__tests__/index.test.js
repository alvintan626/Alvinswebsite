import {save_Comment} from 'actions' // accesses the index.js
import {SAVE_COMMENT} from 'actions/types'


describe('saveComment', ()=>{
    it('has the correct type', ()=>{
        const action = save_Comment()
        expect(action.type).toEqual(SAVE_COMMENT)
    })

    it('has the correct payload', ()=>{
        const action = save_Comment('new comment')
        expect(action.payload).toEqual('new comment')
    })
})