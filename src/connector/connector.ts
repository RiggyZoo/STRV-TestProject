import { ReqResponse } from '../types/connector'
import { getUser } from '../helpers/currentUser'
import { getToken } from '../utils/token'

const request = async <T>(
  path: string,
  { method, body }: RequestInit,
): Promise<ReqResponse<T>> => {
  try {
    const response = await fetch(`${process.env.REACT_APP_ENDPOINT}/${path}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: getToken() || ' ',
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
  patch: async <TResponse, TBody>(path: string, payload: TBody) => {
    return await request<TResponse>(path, {
      method: 'PATCH',
      body: JSON.stringify(payload),
    })
  },
  delete: async <TResponse>(path: string) => {
    return await request<TResponse>(path, { method: 'DELETE' })
  },
}
