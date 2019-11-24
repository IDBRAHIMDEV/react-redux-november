import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import { addPost } from '../../store/actions/postActions';

 class PostAdd extends Component {
    
    state = {
        title: '',
        body: ''
    }

    handleForm = (e) => {
        this.setState({
           [e.target.name]: e.target.value
        })
    }

    savePost = () => {
        
        let { title, body } = this.state;

        let post = {
            title,
            body
        }

        this.props.addPost(post);

        this.props.history.push('/');
    }

    render() {
        return (
            <Fragment>
                
                <div className="form-group">
                  <label htmlFor="title">title</label>
                  <input onChange={this.handleForm} type="text" name="title" id="title" className="form-control" placeholder="" />
                </div>

                <div className="form-group">
                  <label htmlFor="body">body</label>
                  <textarea onChange={this.handleForm} className="form-control" name="body" id="body" rows="3"></textarea>
                </div>

                <button onClick={this.savePost} className="btn btn-block btn-warning">
                    <i className="fa fa-send"></i> Save
                </button>

            </Fragment>
        )
    }
}

export default connect(null, { addPost })(PostAdd)
