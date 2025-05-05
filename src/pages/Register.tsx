import { useState } from 'react'
import { Link } from 'react-router-dom'

function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Register attempt', { name, email, password, confirmPassword })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='space-y-4'
    >
      <div>
        <label
          htmlFor='name'
          className='block text-sm font-medium text-slate-700 dark:text-slate-300'
        >
          Имя
        </label>
        <input
          id='name'
          type='text'
          value={name}
          onChange={e => setName(e.target.value)}
          required
          className='mt-1 block w-full px-3 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
        />
      </div>

      <div>
        <label
          htmlFor='email'
          className='block text-sm font-medium text-slate-700 dark:text-slate-300'
        >
          Email
        </label>
        <input
          id='email'
          type='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          className='mt-1 block w-full px-3 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
        />
      </div>

      <div>
        <label
          htmlFor='password'
          className='block text-sm font-medium text-slate-700 dark:text-slate-300'
        >
          Пароль
        </label>
        <input
          id='password'
          type='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          className='mt-1 block w-full px-3 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
        />
      </div>

      <div>
        <label
          htmlFor='confirmPassword'
          className='block text-sm font-medium text-slate-700 dark:text-slate-300'
        >
          Подтвердите пароль
        </label>
        <input
          id='confirmPassword'
          type='password'
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
          required
          className='mt-1 block w-full px-3 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
        />
      </div>

      <div>
        <button
          type='submit'
          className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
        >
          Зарегистрироваться
        </button>
      </div>

      <div className='text-center mt-4'>
        <span className='text-sm text-slate-600 dark:text-slate-400'>Уже есть аккаунт? </span>
        <Link
          to='/auth/login'
          className='text-sm font-medium text-blue-600 hover:text-blue-500'
        >
          Войти
        </Link>
      </div>
    </form>
  )
}

export default Register
