import React from 'react'
import { Link } from 'react-router-dom'
import GoogleAuth from './GoogleAuth'


//! You can't include a Link tag outside Router Element

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to='/' className='item'>
                Streamy
            </Link>
            <div className="right menu">
                <Link to='/' className='item'>
                    All Streams
                </Link>
                <GoogleAuth />
            </div>
        </div>
    )
}

export default Header