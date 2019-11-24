import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class PostItem extends Component {
    render() {
        let { id, title, body } = this.props.post;
        return (
            <div>
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">{title.substr(0, 20)}</h4>
                        <p className="card-text">{body.substr(0, 120)}...</p>
                        <div className="text-center m-2">
                            <Link to={`/post/${id}`} className="btn btn-dark mr-1">
                                <i className="fa fa-eye"></i>
                            </Link>

                            <button className="btn btn-warning mr-1">
                                <i className="fa fa-pencil"></i>
                            </button>

                            <button className="btn btn-danger">
                                <i className="fa fa-times"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostItem
