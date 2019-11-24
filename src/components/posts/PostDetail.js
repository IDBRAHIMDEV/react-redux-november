import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getOnePost } from '../../store/actions/postActions';

class PostDetail extends Component {

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.getOnePost(id);
    }
   
    render() {
       
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-md-6">
                        <h2>{this.props.myPost && this.props.myPost.title}</h2>
                    </div>
                    <div className="col-md-6 text-right">
                        <Link to="/" className="btn btn-link">
                            <i className="fa fa-arrow-left"></i>
                        </Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mx-auto">
                    {this.props.myPost && this.props.myPost.body}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    
    return {
        myPost: state.post.posts.find(post => post.id === +ownProps.match.params.id)
    }
}
export default connect(mapStateToProps, {getOnePost})(PostDetail)
