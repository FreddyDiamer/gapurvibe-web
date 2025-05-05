import { useState } from 'react'
import { Link } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Login attempt', { email, password })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='space-y-4'
    >
      <div>
        <label
          htmlFor='email'
          className='block text-sm font-medium text-slate-700'
        >
          Email
        </label>
        <input
          id='email'
          type='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          className='mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
        />
      </div>

      <div>
        <label
          htmlFor='password'
          className='block text-sm font-medium text-slate-700'
        >
          Пароль
        </label>
        <input
          id='password'
          type='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          className='mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
        />
      </div>

      <div className='flex items-center justify-between'>
        <div className='flex items-center'>
          <input
            id='remember-me'
            type='checkbox'
            className='h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300 rounded'
          />
          <label
            htmlFor='remember-me'
            className='ml-2 block text-sm text-slate-700'
          >
            Запомнить меня
          </label>
        </div>

        <Link
          to='/auth/reset-password'
          className='text-sm font-medium text-blue-600 hover:text-blue-500'
        >
          Забыли пароль?
        </Link>
      </div>

      <div>
        <button
          type='submit'
          className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
        >
          Войти
        </button>
      </div>

      <div className='text-center mt-4'>
        <span className='text-sm text-slate-600'>Нет аккаунта? </span>
        <Link
          to='/auth/register'
          className='text-sm font-medium text-blue-600 hover:text-blue-500'
        >
          Зарегистрироваться
        </Link>
      </div>
    </form>
  )
}

export default Login
