import React from 'react'
import { Link } from 'react-router-dom'
export default function Section() {
    return (
        <div>
            <h1>Section</h1>
            <ul>
                <li><Link to="/">Home</Link></li> 
                <li><Link to="/navbar">Navbar</Link></li>
            </ul>
        </div>
    )
}
