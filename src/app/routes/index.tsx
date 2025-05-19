import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Suspense, lazy } from 'react'

import AppLayout from '@/app/layouts/AppLayout'
import AuthLayout from '@/app/layouts/AuthLayout'
import { LoadingSpinner } from '@/shared/components/ui'

const HomePage = lazy(() => import('@/pages/home'))
const PlacesPage = lazy(() => import('@/pages/places'))
const CreatePlacePage = lazy(() => import('@/pages/places/create'))
const NotFoundPage = lazy(() => import('@/pages/not-found'))
const LoginPage = lazy(() => import('@/pages/auth/Login'))
const RegisterPage = lazy(() => import('@/pages/auth/Register'))
const ResetPasswordPage = lazy(() => import('@/pages/auth/ResetPassword'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: 'places',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <PlacesPage />
          </Suspense>
        ),
      },
      {
        path: 'places/create',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <CreatePlacePage />
          </Suspense>
        ),
      },
      {
        path: '*',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <NotFoundPage />
          </Suspense>
        ),
      },
    ],
  },

  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <LoginPage />
          </Suspense>
        ),
      },
      {
        path: 'register',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <RegisterPage />
          </Suspense>
        ),
      },
      {
        path: 'reset-password',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <ResetPasswordPage />
          </Suspense>
        ),
      },
    ],
  },
])

export const AppRouter = () => <RouterProvider router={router} />
