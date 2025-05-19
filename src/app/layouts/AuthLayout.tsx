import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-slate-100'>
      <div className='w-full max-w-md p-8 bg-white rounded-lg shadow-lg'>
        <div className='mb-6 text-center'>
          <h1 className='text-2xl font-bold text-slate-800'>GapurVibe</h1>
          <p className='text-slate-500'>Войдите или зарегистрируйтесь</p>
        </div>

        <Outlet />

        <div className='mt-6 text-center text-sm text-slate-500'>
          &copy; {new Date().getFullYear()} GapurVibe
        </div>
      </div>
    </div>
  )
}

export default AuthLayout
