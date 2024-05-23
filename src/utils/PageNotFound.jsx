import React from 'react'
import { Link } from 'react-router-dom'

export const PageNotFound = () => {
    return (
        <div className='container'>
            <div className=' mt-5 text-danger text-center'>
                <p className='display-2'>PageNotFound</p>
                <Link to='/' className='btn btn-primary main-color text-center m-auto' >Go to Home</Link>
            </div>

        </div>
    )
}
