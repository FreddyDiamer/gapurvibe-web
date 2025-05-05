import { useCountStore } from '@/stores'

const HomePage = () => {
  const { count, increment, decrement } = useCountStore()

  return (
    <div>
      <h1 className='text-3xl font-bold mb-6'>Home Page</h1>

      <div className='bg-white p-6 rounded-lg shadow max-w-md'>
        <h2 className='text-xl font-semibold mb-4'>Counter Example</h2>
        <p className='mb-4 text-slate-600'>
          This is a simple counter example using Zustand for state management:
        </p>

        <div className='flex items-center space-x-4 mb-4'>
          <button
            onClick={decrement}
            className='btn btn-secondary'
          >
            -
          </button>
          <span className='text-2xl font-bold'>{count}</span>
          <button
            onClick={increment}
            className='btn btn-primary'
          >
            +
          </button>
        </div>
      </div>
    </div>
  )
}

export default HomePage
