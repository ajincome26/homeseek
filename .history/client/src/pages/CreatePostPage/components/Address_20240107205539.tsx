import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import provinceApi from '~/apis/province.api'
import { Select } from '~/components/Select'
import { Province } from '~/types/province.type'
import { apiGetPublicDistricts } from '~/utils/utils'

const Address = () => {
  const [provinces, setProvinces] = useState<Province[]>([])
  const [provinceCode, setProvinceCode] = useState(1000)
  const [districts, setDistricts] = useState([])
  const [district, setDistrict] = useState()

  const provincesQuery = useQuery({
    queryKey: ['products'],
    queryFn: () => provinceApi.getProvinces()
  })

  useEffect(() => {
    if (provincesQuery.data?.data) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      setProvinces((provincesQuery.data.data as any).results)
    }
  }, [provincesQuery, setProvinces])

  useEffect(() => {
    const fetchDistrict = async () => {
      const response = await apiGetPublicDistricts(provinceCode)
      // console.log(response);
      setDistricts(response?.data.results)
    }
    fetchDistrict()
  }, [provinces, provinceCode])

  return (
    <div>
      <h1 className='mb-5 text-2xl font-semibold'>Địa chỉ cho thuê</h1>
      <div className='flex gap-10 mb-5'>
        <Select type='province' label='Tỉnh/Thành phố' optionTitle='--Chọn Tỉnh/TP--' provinces={provinces} />
        <Select type='district' label='Quận/Huyện' optionTitle='Chọn Quận/Huyện' districts={districts} />
      </div>
    </div>
  )
}

export default Address
