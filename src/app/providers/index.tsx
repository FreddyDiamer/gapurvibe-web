import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode } from 'react'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      retry: 1,
    },
  },
})

interface ProvidersProps {
  children: ReactNode
}

export const AppProviders = ({ children }: ProvidersProps) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
