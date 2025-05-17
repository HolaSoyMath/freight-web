import { ResponseBody } from '@/types'
import { api } from '@/lib/http/api-instance'
import { removeEmptyParams } from '@/lib/utils/convert-query-params'

const endpoint = 'your-endpoint'

export const getAllCompanies = async (
  params: Record<string, any> = {},
): Promise<T[]> => {
  const response = await api.get<ResponseBody<T[]>>(`/${endpoint}`, {
    params: removeEmptyParams(params),
  })
  return response.data?.data
}

export const getCompanyById = async (id: number): Promise<T> => {
  const response = await api.get<ResponseBody<T>>(`/${endpoint}/${id}`)
  return response.data?.data
}

export const postCompany = async (
  payload: T,
): Promise<T> => {
  const response = await api.post<T>(`/${endpoint}`, payload)
  return response.data
}

export const putCompany = async (
  id: number,
  payload: TemplateStringsArray,
): Promise<T> => {
  const response = await api.put<T>(`/${endpoint}/${id}`, payload)
  return response.data
}
