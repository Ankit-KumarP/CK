import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
            <h1>Home</h1>
            <Link to="/navbar">Navbar</Link> <br />
            <Link to="/Section">Section</Link>
        </>
    )
}

export default Home
