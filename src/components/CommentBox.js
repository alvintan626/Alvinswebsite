import React, {Component} from 'react'

import {connect} from 'react-redux'
import * as actions from 'actions' //gives us actins/index.js

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

        this.props.save_Comment(this.state.comment)

        this.setState({
            'comment': ''
        })
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <h4>Add a comment</h4>
                <textarea onChange={this.handleChange} value={this.state.comment} ></textarea>
                <div>
                    <button>Submit</button>
                </div>
            </form> 
        )
    }
}

export default connect(null,actions)(CommentBox)