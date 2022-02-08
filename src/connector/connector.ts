import { ReqResponse } from '../types/connector'
import { getUser } from '../helpers/currentUser'
import {
  getRefreshToken,
  getToken,
  setRefreshToken,
  setToken,
} from '../utils/token'

const request = async <T>(
  path: string,
  { method, body }: RequestInit,
  authorization: boolean = true,
): Promise<ReqResponse<T>> => {
  try {
    const response = await fetch(`${process.env.REACT_APP_ENDPOINT}/${path}`, {
      method,
      headers: authorization
        ? {
            'Content-Type': 'application/json',
            Authorization: getToken() || ' ',
            apikey:
              process.env.REACT_API_KEY ||
              'd3479d2a6807f069cf45b02378694036b602ce3e',
          }
        : {
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
    const refreshJwt = response.headers.get('Refresh-Token')

    if (jwt) {
      setToken(jwt)
    }
    if (refreshJwt) {
      setRefreshToken(refreshJwt)
    }
    //TODO:refsresh token

    if (response.status === 403) {
      const refreshToken = async () => {
        const { jwt } = await connector.post(
          'auth/native',
          {
            refreshToken: getRefreshToken(),
          },
          false,
        )
        if (jwt) {
          request()
        }
      }

      refreshToken()
    }

    return {
      status: response.status,
      ok: response.ok,
      data,
      jwt: jwt,
      refreshJwt: refreshJwt,
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
  post: async <TResponse, TBody>(
    path: string,
    payload: TBody,
    authorization: boolean,
  ) => {
    return await request<TResponse>(
      path,
      {
        method: 'POST',
        body: JSON.stringify(payload),
      },
      authorization,
    )
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
