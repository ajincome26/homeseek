import { useEffect, useState } from 'react'
import { Select } from '~/components/Select'
import { Province } from '~/types/province.type'
import { apiGetPublicProvinces } from '~/utils/utils'

const Address = () => {
  const [data, setData] = useState<Province[]>([])
  useEffect(() => {
    const fetchProvinces = async () => {
      const response = await apiGetPublicProvinces()
      console.log('file: Address.tsx:10 ~ fetchProvinces ~ response:', response.data.results)
      // if (response.status === 200) setData(response?.data.results)
    }
    fetchProvinces()
  }, [])
  return (
    <div>
      <h1 className='mb-5 text-2xl font-semibold'>Địa chỉ cho thuê</h1>
      <div className='flex gap-10 mb-5'>
        <Select />
      </div>
    </div>
  )
}

export default Address
