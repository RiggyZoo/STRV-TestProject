type ErrorData = {
  code?: number
  description?: string
}

export interface ReqResponse<T> {
  status: number
  ok: boolean
  data?: T & ErrorData
  error?: unknown
  jwt?: string | null
  refreshJwt?: string | null
}

export type ResponseData<T> = {
  data: T
}

export type DeleteRes = {
  id: string
}

export type Params = {
  [key: string]: string | number | undefined | null
}
