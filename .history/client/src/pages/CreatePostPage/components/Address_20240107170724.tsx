import { useEffect, useState } from 'react'
import { Select } from '~/components/Select'
import { apiGetPublicProvinces } from '~/utils/utils'

const Address = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchProvinces = async () => {
      const response = await apiGetPublicProvinces()
      if (response.status === 200) setData(response?.data.results)
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
