import { useCountStore } from '@/stores'

const AboutPage = () => {
  const { count } = useCountStore()

  return (
    <div>
      <h1 className='text-3xl font-bold mb-6'>About Page {count}</h1>

      <div className='bg-white p-6 rounded-lg shadow max-w-2xl'>
        <h2 className='text-xl font-semibold mb-4'>Feature-Sliced Design</h2>
        <p className='mb-4 text-slate-600'>
          This application is built using the Feature-Sliced Design (FSD) methodology, which is a
          structural methodology for frontend applications.
        </p>

        <h3 className='text-lg font-semibold mb-2'>Key Features:</h3>
        <ul className='list-disc pl-6 mb-4 text-slate-600'>
          <li>Scalable architecture</li>
          <li>Clear separation of concerns</li>
          <li>Strong boundaries between slices</li>
          <li>Decoupled development experience</li>
          <li>Project adaptability</li>
        </ul>

        <h3 className='text-lg font-semibold mb-2'>Technologies Used:</h3>
        <ul className='list-disc pl-6 text-slate-600'>
          <li>React + TypeScript</li>
          <li>Vite + SWC for fast builds</li>
          <li>Zustand for state management</li>
          <li>React Router for navigation</li>
          <li>React Query for data fetching</li>
          <li>Zod for schema validation</li>
          <li>SCSS and Tailwind CSS for styling</li>
        </ul>
      </div>
    </div>
  )
}

export default AboutPage
