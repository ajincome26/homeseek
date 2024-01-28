import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import provinceApi from '~/apis/province.api'
import { Select } from '~/components/Select'
import { Province } from '~/types/province.type'

const Address = () => {
  const navigate = useNavigate()
  const [data, setData] = useState<Province[]>([])
  // useEffect(() => {
  //   const fetchProvinces = async () => {
  //     const response: Province[] = await provinceApi.getProvinces()
  //     console.log('file: Address.tsx:11 ~ fetchProvinces ~ response:', response)
  //     if (response.status === 200) setData(response.data.results)
  //   }
  //   fetchProvinces()
  // }, [])

  const provincesQuery = useQuery({
    queryKey: ['products'],
    queryFn: () => provinceApi.getProvinces()
  })
  useEffect(() => {
    if (provincesQuery.data?.data) {
      setData(provincesQuery.data.data.results)
    }
  }, [provincesQuery])

  return (
    <div>
      <h1 className='mb-5 text-2xl font-semibold'>Địa chỉ cho thuê</h1>
      <div className='flex gap-10 mb-5'>
        <Select provinces={[]} />
      </div>
    </div>
  )
}

export default Address
