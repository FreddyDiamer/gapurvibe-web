import { useOutletContext } from 'react-router-dom'

type LayoutContextType = {
  fullWidthScreen: boolean
  setFullWidthScreen: (value: boolean) => void
}

export const useLayoutContext = () => {
  return useOutletContext<LayoutContextType>()
}

export default useLayoutContext
