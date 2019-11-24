import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import { getPosts } from '../../store/actions/postActions';
import PostItem from './PostItem'

class PostList extends Component {

    componentDidMount() {
        this.props.getPosts();
    }

    render() {
        let { myPosts } = this.props;
        return (
            <Fragment> 
                <div className="row">
                 {myPosts && myPosts.map(post => (
                   <div key={post.id} className="col-md-6">
                       <PostItem post={post}/>
                   </div>    
                 )) }
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        myPosts: state.post.posts
    }
} 

export default connect(mapStateToProps, { getPosts })(PostList)
