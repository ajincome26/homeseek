import { Province } from '~/types/province.type'
import { apiGetPublicProvinces } from '~/utils/utils'

const provinceApi = {
  getProvinces: () => apiGetPublicProvinces.get<Province[]>('/')
}

export default provinceApi
