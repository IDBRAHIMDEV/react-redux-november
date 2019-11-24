import React, { useState } from 'react'

function PageNotFound() {


    const [message, setMessage] = useState('Page not found !');

    return (
        
        <div className="alert alert-warning">
        <h3>{message}</h3>
        <button onClick={ () => setMessage('je viens de cliauer sur le button') } className="btn btn-primary">ok</button>
        </div>
       
    )
}

export default PageNotFound
