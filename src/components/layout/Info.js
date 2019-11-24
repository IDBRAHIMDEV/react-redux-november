import React, { Component } from 'react'
import { connect } from 'react-redux';

class Info extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="alert alert-info my-3">
                  {this.props.message} : <strong>{ this.props.postCount }</strong> 
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
   return {
    postCount: state.post.posts.length
   }
}

export default connect(mapStateToProps)(Info);
