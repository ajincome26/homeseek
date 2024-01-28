import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import provinceApi from '~/apis/province.api'
import { Select } from '~/components/Select'
import { Province } from '~/types/province.type'
import { apiGetPublicDistricts } from '~/utils/utils'

const Address = () => {
  const [data, setData] = useState<Province[]>([])
  const [districts, setDistricts] = useState([])
  const [province, setProvince] = useState(100)

  const provincesQuery = useQuery({
    queryKey: ['products'],
    queryFn: () => provinceApi.getProvinces()
  })

  useEffect(() => {
    if (provincesQuery.data?.data) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      setData((provincesQuery.data.data as any).results)
    }
  }, [provincesQuery])

  useEffect(() => {
    const fetchDistrict = async () => {
      const response = await apiGetPublicDistricts(province)
      // console.log(response);
      setDistricts(response?.data.results)
    }
    fetchDistrict()
  }, [province])

  return (
    <div>
      <h1 className='mb-5 text-2xl font-semibold'>Địa chỉ cho thuê</h1>
      <div className='flex gap-10 mb-5'>
        <Select provinces={data} />
      </div>
    </div>
  )
}

export default Address
