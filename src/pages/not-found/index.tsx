import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className='text-center py-12'>
      <h1 className='text-6xl font-bold text-blue-600 mb-4'>404</h1>
      <h2 className='text-3xl font-semibold mb-6'>Page Not Found</h2>
      <p className='text-slate-600 mb-8 max-w-md mx-auto'>
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link
        to='/'
        className='btn btn-primary'
      >
        Back to Home
      </Link>
    </div>
  )
}

export default NotFoundPage
