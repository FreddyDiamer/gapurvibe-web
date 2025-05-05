import { Outlet } from 'react-router-dom'

export const AuthLayout = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-slate-100 dark:bg-slate-900'>
      <div className='w-full max-w-md p-8 bg-white dark:bg-slate-800 rounded-lg shadow-lg'>
        <div className='mb-6 text-center'>
          <h1 className='text-2xl font-bold text-slate-800 dark:text-white'>GapurVibe</h1>
          <p className='text-slate-500 dark:text-slate-400'>Войдите или зарегистрируйтесь</p>
        </div>

        <Outlet />

        <div className='mt-6 text-center text-sm text-slate-500 dark:text-slate-400'>
          &copy; {new Date().getFullYear()} GapurVibe
        </div>
      </div>
    </div>
  )
}

export default AuthLayout
