import { Map, type MapPoint } from '@components/widgets'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import useLayoutContext from '@/shared/hooks/useLayoutContext'

const EXAMPLE_POINTS: MapPoint[] = [
  {
    id: 1,
    position: [55.751244, 37.618423],
    title: 'Москва',
    description: 'Столица России',
  },
  {
    id: 4,
    position: [55.951244, 37.618423],
    title: 'Москва',
    description: 'Столица России',
  },
  {
    id: 2,
    position: [59.9343, 30.3351],
    title: 'Санкт-Петербург',
    description: 'Культурная столица России',
  },
  {
    id: 3,
    position: [56.8519, 60.6122],
    title: 'Екатеринбург',
    description: 'Столица Урала',
  },
]

const PlacesPage = () => {
  const { setFullWidthScreen } = useLayoutContext()

  useEffect(() => {
    setFullWidthScreen(true)

    return () => {
      setFullWidthScreen(false)
    }
  }, [setFullWidthScreen])

  return (
    <div className='flex flex-col h-screen'>
      <h1 className='text-3xl font-bold'>All Places</h1>

      <Map
        points={EXAMPLE_POINTS}
        center={[57.7, 37.6]}
        zoom={5}
      />
    </div>
  )
}

export default PlacesPage
