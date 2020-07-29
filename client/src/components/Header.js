import React from 'react'
import { Link } from 'react-router-dom'

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
            </div>
        </div>
    )
}

export default Header