import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './app/styles/main.scss'
import { AppRouter } from './app/routes'
import { AppProviders } from './app/providers'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppProviders>
      <AppRouter />
    </AppProviders>
  </StrictMode>
)
