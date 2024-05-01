import React from 'react'
import { Link } from 'react-router-dom'
function NoPage() {
  return (
    <>
    <div className="py-5">
    <h1 className='text-center text-danger mb-4'>404 No page found</h1>
    <h1 className='text-center '><Link to="/">Click here to go to the home page</Link></h1>
    </div>
    </>
  )
}

export default NoPage;