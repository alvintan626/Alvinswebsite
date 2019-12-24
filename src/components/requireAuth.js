// this file naming convention (lowercase first letter)
// means this file will be used for exporting functions rather than class based usage

import React, {Component} from 'react'
import {connect} from 'react-redux'
export default (ChildComponent) => {
    class ComposedComponent extends Component {
        componentDidMount(){
            this.shouldNavigateAway()
        }
    
        //whenever commentbox recieve new props
        componentDidUpdate(){
            this.shouldNavigateAway()
        }
    
        shouldNavigateAway(){
            if (!this.props.auth) {
                this.props.history.push('/')
            }
        }

        render(){
            return <ChildComponent {...this.props}/>
        }
    }

    function mapStateToProps(state){
        return {auth: state.auth}
    }

    return connect(mapStateToProps)(ComposedComponent)
}
