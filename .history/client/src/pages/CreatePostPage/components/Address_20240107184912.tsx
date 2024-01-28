import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import provinceApi from '~/apis/province.api'
import { Select } from '~/components/Select'
import { ResProvinces } from '~/types/province.type'

const Address = () => {
  const [data, setData] = useState<ResProvinces>()

  const provincesQuery = useQuery({
    queryKey: ['products'],
    queryFn: () => provinceApi.getProvinces()
  })
  useEffect(() => {
    console.log(provincesQuery.data?.data)
    if (provincesQuery.data?.data) {
      setData(provincesQuery.data.data)
    }
  }, [provincesQuery])

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
