import { useEffect, useState } from 'react'
import authApi from '~/apis/auth.api'
import { Select } from '~/components/Select'
import { Province } from '~/types/province.type'

const Address = () => {
  const [data, setData] = useState<Province[]>([])
  useEffect(() => {
    const fetchProvinces = async () => {
      const response: Province[] = await authApi.getProvinces()
      console.log('file: Address.tsx:11 ~ fetchProvinces ~ response:', response)
      if (response.status === 200) setData(response.data.results)
    }
    fetchProvinces()
  }, [])
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
