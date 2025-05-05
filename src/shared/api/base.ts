const API_URL = import.meta.env.VITE_API_URL || 'https://api.example.com'

export class ApiError extends Error {
  status: number
  data: any

  constructor(message: string, status: number, data: any) {
    super(message)
    this.name = 'ApiError'
    this.status = status
    this.data = data
  }
}

interface RequestOptions extends RequestInit {
  params?: Record<string, string>
}

const http = {
  async request<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
    const { params, ...init } = options

    const url = new URL(endpoint, API_URL)
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        url.searchParams.append(key, value)
      })
    }

    const headers = new Headers(init.headers)

    if (!headers.has('Content-Type') && !options.body) {
      headers.set('Content-Type', 'application/json')
    }

    const response = await fetch(url.toString(), {
      ...init,
      headers,
    })

    let data
    const contentType = response.headers.get('Content-Type')

    if (contentType?.includes('application/json')) {
      data = await response.json()
    } else {
      data = await response.text()
    }

    if (!response.ok) {
      throw new ApiError(response.statusText || 'Request failed', response.status, data)
    }

    return data as T
  },

  async get<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
    return this.request<T>(endpoint, { ...options, method: 'GET' })
  },

  async post<T>(endpoint: string, data?: any, options: RequestOptions = {}): Promise<T> {
    return this.request<T>(endpoint, {
      ...options,
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined,
    })
  },

  async put<T>(endpoint: string, data?: any, options: RequestOptions = {}): Promise<T> {
    return this.request<T>(endpoint, {
      ...options,
      method: 'PUT',
      body: data ? JSON.stringify(data) : undefined,
    })
  },

  async delete<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
    return this.request<T>(endpoint, { ...options, method: 'DELETE' })
  },
}

export default http
