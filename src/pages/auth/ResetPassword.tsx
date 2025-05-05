import { useState } from 'react'
import { Link } from 'react-router-dom'

function ResetPassword() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Reset password attempt', { email })
    setIsSubmitted(true)
  }

  return (
    <>
      {!isSubmitted ? (
        <form
          onSubmit={handleSubmit}
          className='space-y-4'
        >
          <div>
            <h2 className='text-xl font-medium text-slate-800 mb-4'>Восстановление пароля</h2>
            <p className='text-sm text-slate-600 mb-4'>
              Введите адрес электронной почты, и мы отправим вам инструкции для сброса пароля.
            </p>
          </div>

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
            <button
              type='submit'
              className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
            >
              Отправить инструкции
            </button>
          </div>

          <div className='text-center mt-4'>
            <Link
              to='/auth/login'
              className='text-sm font-medium text-blue-600 hover:text-blue-500'
            >
              Вернуться к странице входа
            </Link>
          </div>
        </form>
      ) : (
        <div className='text-center py-8'>
          <svg
            className='mx-auto h-12 w-12 text-green-500'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M5 13l4 4L19 7'
            />
          </svg>
          <h2 className='mt-4 text-xl font-medium text-slate-800'>Проверьте вашу почту</h2>
          <p className='mt-2 text-sm text-slate-600'>
            Мы отправили инструкции по сбросу пароля на {email}
          </p>
          <div className='mt-6'>
            <Link
              to='/auth/login'
              className='text-sm font-medium text-blue-600 hover:text-blue-500'
            >
              Вернуться к странице входа
            </Link>
          </div>
        </div>
      )}
    </>
  )
}

export default ResetPassword
