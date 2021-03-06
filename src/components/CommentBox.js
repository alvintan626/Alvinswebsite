import React, {Component} from 'react'

import {connect} from 'react-redux'
import * as actions from 'actions' //gives us actins/index.js
import requireAuth from 'components/requireAuth'
class CommentBox extends Component {
    state = {
        'comment': ''
    }

    handleChange = event => {
        this.setState({
            'comment': event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()

        this.props.save_Comment(this.state.comment) //redux action

        this.setState({
            'comment': ''
        })
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h4>Add a comment</h4>
                    <textarea onChange={this.handleChange} value={this.state.comment} ></textarea>
                    <div>
                        <button>Submit</button>
                    </div>
                </form> 
                <button className="fetch-comments" onClick={this.props.fetchComments}>Fetch Comments</button>
            </div>
        )
    }
}


export default connect(null,actions)(requireAuth(CommentBox))