function App() {
  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-6'>SCSS + Tailwind Demo</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div className='bg-white dark:bg-slate-800 p-6 rounded-lg shadow'>
          <h2 className='text-xl font-semibold mb-4'>Tailwind Classes</h2>
          <p className='text-slate-600 dark:text-slate-300 mb-4'>
            This section uses Tailwind utility classes for styling.
          </p>
          <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors'>
            Tailwind Button
          </button>
        </div>

        <div className='bg-white dark:bg-slate-800 p-6 rounded-lg shadow'>
          <h2 className='text-xl font-semibold mb-4'>SCSS Custom Classes</h2>
          <p className='text-slate-600 dark:text-slate-300 mb-4'>
            This section uses custom SCSS classes defined in our styles.
          </p>
          <button className='btn btn-primary mr-5'>Primary Button</button>
          <button className='btn btn-secondary'>Secondary Button</button>
        </div>
      </div>
    </div>
  )
}

export default App
