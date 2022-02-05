import { ReqResponse } from '../types/connector'
import { getUser } from '../helpers/currentUser'

const request = async <T>(
  path: string,
  { method, body }: RequestInit,
): Promise<ReqResponse<T>> => {
  try {
    const response = await fetch(`${process.env.REACT_APP_ENDPOINT}/${path}`, {
      method,
      headers: {
        'Content-Type': 'application/json',

        apikey:
          process.env.REACT_API_KEY ||
          'd3479d2a6807f069cf45b02378694036b602ce3e',
      },
      body: body,
    })

    const data =
      response.headers.get('Content-Type')?.includes('application/json') &&
      (await response.json())
    const jwt = response.headers.get('Authorization')
    const refresJwt = response.headers.get('Refresh-Token')

    return {
      status: response.status,
      ok: response.ok,
      data,
      jwt: jwt,
      refreshJwt: refresJwt,
    }
  } catch (error) {
    return {
      status: 500,
      ok: false,
      error,
    }
  }
}

export const connector = {
  get: async <TResponse>(path: string) => {
    return await request<TResponse>(path, { method: 'GET' })
  },
  post: async <TResponse, TBody>(path: string, payload: TBody) => {
    return await request<TResponse>(path, {
      method: 'POST',
      body: JSON.stringify(payload),
    })
  },
  put: async <TResponse, TBody>(path: string, payload: TBody) => {
    return await request<TResponse>(path, {
      method: 'PUT',
      body: JSON.stringify(payload),
    })
  },
  patch: async <TResponse, TBody>(path: string, payload: TBody) => {
    return await request<TResponse>(path, {
      method: 'PATCH',
      body: JSON.stringify(payload),
    })
  },
  delete: async <TResponse>(path: string) => {
    return await request<TResponse>(path, { method: 'DELETE' })
  },

  // эти два метода можно было также сделать через функцию request, но для читаемости и гибкости оставил так
  static: async <TResponse>(path: string): Promise<ReqResponse<TResponse>> => {
    try {
      type Config = RequestInit & {
        responseType: string
      }
      const config: Config = {
        method: 'GET',
        responseType: 'arraybuffer',
        headers: {
          Authorization: `Bearer ${getUser()}`,
        },
      }
      const response = await fetch(
        `${process.env.REACT_APP_ENDPOINT}/${path}`,
        config,
      )

      const blob = await response.blob()
      const objectURL = URL.createObjectURL(blob)

      return {
        status: response.status,
        ok: response.ok,
        data: objectURL as unknown as TResponse,
      }
    } catch (error) {
      return {
        status: 500,
        ok: false,
        error,
      }
    }
  },
  download: async <TBody, TResponse>(
    path: string,
    payload: TBody,
  ): Promise<ReqResponse<TResponse>> => {
    try {
      const body = JSON.stringify(payload)

      const response = await fetch(
        `${process.env.REACT_APP_ENDPOINT}/${path}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${getUser()}`,
          },
          body,
        },
      )

      const disposition = response.headers.get('Content-Disposition')
      const match = disposition?.match(/filename=([a-zA-Z0-9_ ]*.[\w]{2,4})/)
      const filename = match && match[1]

      const data = {
        blob: await response.blob(),
        name: filename,
      }

      return {
        status: response.status,
        ok: response.ok,
        data: data as unknown as TResponse,
      }
    } catch (error) {
      return {
        status: 500,
        ok: false,
        error,
      }
    }
  },
}
