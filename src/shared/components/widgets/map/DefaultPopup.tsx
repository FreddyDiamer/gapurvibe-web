import { MapPoint } from './types'

type PopupProps = {
  point: MapPoint
}

function Popup({ point }: PopupProps) {
  return (
    <div>
      <h1>{point.title}</h1>
      <p>{point.description}</p>
    </div>
  )
}

export default Popup
