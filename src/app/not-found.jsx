import Link from 'next/link'
import React from 'react'

const NotFoundPage = () => {
  return (
    <div>
        <h2>Not Found 404</h2>
        <p>Sorry, the page you are looking for does not exists.</p>
        <Link href="/">Return Home</Link>
    </div>
  )
}

export default NotFoundPage