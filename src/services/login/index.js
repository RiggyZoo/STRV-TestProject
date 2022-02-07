import { connector } from '../../connector/connector'

export const login = async (payload) => {
  return await connector.post('auth/native', payload, false)
}
