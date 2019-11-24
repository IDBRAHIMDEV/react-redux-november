import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand navbar-dark bg-warning">
                    <div className="nav navbar-nav">
                        <Link className="nav-item nav-link active" to="/">
                            Home <span className="sr-only">(current)</span>
                        </Link>

                        <Link className="nav-item nav-link active" to="/post/create">
                            New Post 
                        </Link>
                       
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar
