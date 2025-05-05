import { Link, Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <header className='bg-white shadow'>
        <div className='container mx-auto px-4 py-4'>
          <nav className='flex justify-between items-center'>
            <div className='font-bold text-2xl text-blue-600'>AppName</div>
            <ul className='flex space-x-6'>
              <li>
                <Link
                  to='/'
                  className='text-slate-700 hover:text-blue-600'
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to='/about'
                  className='text-slate-700 hover:text-blue-600'
                >
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className='flex-grow'>
        <div className='container mx-auto px-4 py-8'>
          <Outlet />
        </div>
      </main>

      <footer className='bg-white shadow-inner'>
        <div className='container mx-auto px-4 py-4 text-center text-slate-500'>
          &copy; {new Date().getFullYear()} AppName. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
