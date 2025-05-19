import { useState, useEffect } from 'react'

const HomePage = () => {
  const [loading, setLoading] = useState(true)
  const [currentTime, setCurrentTime] = useState(new Date())

  // Simulate loading for smooth animations
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 800)

    return () => clearTimeout(timer)
  }, [])

  // Update time every minute
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date())
    }, 60000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className='min-h-screen bg-gradient-to-b from-blue-50 to-white'>
      <div className='container mx-auto px-4 py-12'>
        {/* Hero section */}
        <div className={`transition-opacity duration-700 ${loading ? 'opacity-0' : 'opacity-100'}`}>
          <div className='mb-16 text-center'>
            <h1 className='text-5xl font-bold mb-6 text-blue-900'>Discover The World Around You</h1>
            <p className='text-xl text-slate-600 max-w-2xl mx-auto'>
              Experience unique places right in your neighborhood, based on your location.
            </p>
          </div>

          {/* Featured location card (placeholder) */}
          <div className='card card-lg card-hover card-bordered-primary max-w-4xl mx-auto mb-12'>
            <div className='relative overflow-hidden rounded-t-lg h-64 bg-blue-200'>
              {/* This will be replaced with actual location image */}
              <div className='absolute inset-0 flex items-center justify-center'>
                <div className='text-blue-800 text-lg'>
                  {loading ? (
                    <div className='animate-pulse flex space-x-4'>
                      <div className='flex-1 space-y-4 py-1'>
                        <div className='h-4 bg-blue-300 rounded w-3/4'></div>
                        <div className='space-y-2'>
                          <div className='h-4 bg-blue-300 rounded'></div>
                          <div className='h-4 bg-blue-300 rounded w-5/6'></div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <p>Location imagery will appear here based on your coordinates</p>
                  )}
                </div>
              </div>
              <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-6'>
                <p className='text-white text-sm'>
                  {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} •{' '}
                  {currentTime.toLocaleDateString()}
                </p>
              </div>
            </div>

            <div className='p-6'>
              <h2 className='text-2xl font-bold mb-3 text-slate-800'>Your Location Spotlight</h2>
              <p className='text-slate-600 mb-4'>
                Soon, this card will showcase interesting places near you based on your location.
                Each day, discover something new about places within walking distance!
              </p>

              <div className='flex flex-wrap gap-2 mb-4'>
                <span className='px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm'>
                  Local History
                </span>
                <span className='px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm'>
                  Hidden Gems
                </span>
                <span className='px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm'>
                  Architecture
                </span>
              </div>

              <button className='btn btn-primary mt-2'>Enable Location Services</button>
            </div>
          </div>

          {/* Quick stats */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-12'>
            <div className='card p-6 text-center'>
              <div className='text-blue-500 text-4xl font-bold mb-2'>150+</div>
              <p className='text-slate-600'>Cities Available</p>
            </div>
            <div className='card p-6 text-center'>
              <div className='text-blue-500 text-4xl font-bold mb-2'>4,500+</div>
              <p className='text-slate-600'>Unique Places</p>
            </div>
            <div className='card p-6 text-center'>
              <div className='text-blue-500 text-4xl font-bold mb-2'>25K+</div>
              <p className='text-slate-600'>Happy Explorers</p>
            </div>
          </div>

          {/* How it works section */}
          <div className='max-w-4xl mx-auto'>
            <h2 className='text-3xl font-bold mb-8 text-center text-slate-800'>How It Works</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              <div className='flex flex-col items-center text-center'>
                <div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 text-2xl font-bold mb-4'>
                  1
                </div>
                <h3 className='text-xl font-semibold mb-2'>Enable Location</h3>
                <p className='text-slate-600'>
                  Allow us to access your location to find interesting spots near you.
                </p>
              </div>
              <div className='flex flex-col items-center text-center'>
                <div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 text-2xl font-bold mb-4'>
                  2
                </div>
                <h3 className='text-xl font-semibold mb-2'>Discover Places</h3>
                <p className='text-slate-600'>
                  Get personalized recommendations based on where you are.
                </p>
              </div>
              <div className='flex flex-col items-center text-center'>
                <div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 text-2xl font-bold mb-4'>
                  3
                </div>
                <h3 className='text-xl font-semibold mb-2'>Explore</h3>
                <p className='text-slate-600'>
                  Visit these places and learn new things about your surroundings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
