import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useLayoutContext from '../../shared/hooks/useLayoutContext'
import Map from '../../shared/components/widgets/map/Map'
import { MapPoint } from '../../shared/components/widgets/map/types'
import { DEFAULT_CENTER } from '../../shared/components/widgets/map/config'

const CreatePlacePage = () => {
  const { setFullWidthScreen } = useLayoutContext()
  const navigate = useNavigate()
  const [position, setPosition] = useState<[number, number]>(DEFAULT_CENTER)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [selectedPoint, setSelectedPoint] = useState<MapPoint | null>(null)

  useEffect(() => {
    setFullWidthScreen(true)
    return () => setFullWidthScreen(false)
  }, [setFullWidthScreen])

  const handleMapClick = (lat: number, lng: number) => {
    setPosition([lat, lng])
    setSelectedPoint({
      id: 0,
      position: [lat, lng],
      title: name || 'Новое место',
      description: description || 'Описание отсутствует',
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!position || !name) {
      alert('Пожалуйста, укажите позицию и название места')
      return
    }

    // Здесь будет логика сохранения места
    console.log({
      name,
      description,
      position,
    })

    navigate('/places')
  }

  return (
    <div className='flex flex-col md:flex-row h-[calc(100vh-120px)]'>
      <div className='md:w-1/3 p-4 overflow-auto'>
        <h1 className='text-2xl font-bold mb-4'>Создание нового места</h1>

        <form
          onSubmit={handleSubmit}
          className='space-y-4'
        >
          <div>
            <label className='block mb-1 font-medium'>Название</label>
            <input
              type='text'
              value={name}
              onChange={e => setName(e.target.value)}
              className='w-full p-2 border rounded'
              required
            />
          </div>

          <div>
            <label className='block mb-1 font-medium'>Описание</label>
            <textarea
              value={description}
              onChange={e => setDescription(e.target.value)}
              className='w-full p-2 border rounded h-32'
            />
          </div>

          <div>
            <label className='block mb-1 font-medium'>Координаты</label>
            <div className='flex space-x-2'>
              <input
                type='text'
                value={position[0].toFixed(6)}
                readOnly
                className='w-full p-2 border rounded bg-gray-50'
              />
              <input
                type='text'
                value={position[1].toFixed(6)}
                readOnly
                className='w-full p-2 border rounded bg-gray-50'
              />
            </div>
            <p className='text-sm text-gray-500 mt-1'>Выберите точку на карте, кликнув по ней</p>
          </div>

          <div className='flex space-x-2 pt-4'>
            <button
              type='button'
              onClick={() => navigate('/places')}
              className='px-4 py-2 border rounded'
            >
              Отмена
            </button>
            <button
              type='submit'
              className='px-4 py-2 bg-blue-600 text-white rounded'
            >
              Создать
            </button>
          </div>
        </form>
      </div>

      <div className='md:w-2/3 flex-grow'>
        <Map
          center={position}
          zoom={10}
          points={selectedPoint ? [selectedPoint] : []}
          className='h-full w-full'
          onMapClick={handleMapClick}
        />
      </div>
    </div>
  )
}

export default CreatePlacePage
