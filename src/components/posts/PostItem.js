import React, { Component } from 'react'

class PostItem extends Component {
    render() {
        let { title, body } = this.props.post;
        return (
            <div>
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">{title}</h4>
                        <p className="card-text">{body}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostItem
