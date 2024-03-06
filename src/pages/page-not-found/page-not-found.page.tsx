import React from 'react'
import { Link, useRouteError } from 'react-router-dom'


const PageNotFound = () => {
    const error = useRouteError()

  return (
    <div className='h-screen flex flex-col justify-center items-center bg-cyan-50 text-red-500'>
        404 Page Not Found
        <p className='my-2 text-base'>Sorry, an unexpected error has occurred.</p>
        <Link to={"/"} className='mt-6 border-2 px-2 border-black rounded-sm'>
            Go Back
        </Link>
    </div>
  )
}

export default PageNotFound