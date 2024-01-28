import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import provinceApi from '~/apis/province.api'
import { Select } from '~/components/Select'
import { District, Province } from '~/types/province.type'
import { apiGetPublicDistricts } from '~/utils/utils'

const Address = () => {
  const [provinces, setProvinces] = useState<Province[]>([])
  const [province, setProvince] = useState('')
  const [districts, setDistricts] = useState<District[]>([])
  const [district, setDistrict] = useState('')

  const provincesQuery = useQuery({
    queryKey: ['provinces'],
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
      const response = await apiGetPublicDistricts(province)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      setDistricts((response as any)?.data.results)
    }
    fetchDistrict()
  }, [provinces, province])

  return (
    <div>
      <h1 className='mb-5 text-2xl font-semibold'>Địa chỉ cho thuê</h1>
      <div className='flex gap-10 mb-5'>
        <Select
          type='province'
          label='Tỉnh/Thành phố'
          optionTitle='--Chọn Tỉnh/TP--'
          provinces={provinces}
          value={province}
          setValue={setProvince}
        />
        <Select
          type='district'
          label='Quận/Huyện'
          optionTitle='Chọn Quận/Huyện'
          districts={districts}
          value={district}
          setValue={setDistrict}
        />
      </div>
      <InputReadOnly
        title='Địa chỉ chính xác'
        data={`${district ? `${districts.find((item) => item.district_id === district)?.district_name}, ` : ''} ${
          province ? data.find((item) => item.province_id === province)?.province_name : ''
        }`}
        width='w-full'
      />
    </div>
  )
}

export default Address
