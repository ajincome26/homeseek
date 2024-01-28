import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { UseFormRegister } from 'react-hook-form'
import provinceApi from '~/apis/province.api'
import { Field } from '~/components/Field'
import { InputReadOnly } from '~/components/Input'
import { Label } from '~/components/Label'
import { Select } from '~/components/Select'
import { District, Province } from '~/types/province.type'
import { apiGetPublicDistricts } from '~/utils/utils'
import { FormPost } from '../CreatePost'

export interface AddressProps {
  register: UseFormRegister<FormPost>
}

const Address = ({ register }: AddressProps) => {
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
        <Field>
          <Label textColor='text-black' htmlFor='title'>
            Tỉnh/Thành phố
          </Label>
          <Select
            type='province'
            optionTitle='--Chọn Tỉnh/TP--'
            provinces={provinces}
            value={province}
            setValue={setProvince}
          />
        </Field>
        <Field>
          <Label textColor='text-black' htmlFor='title'>
            Quận/Huyện
          </Label>
          <Select
            type='district'
            optionTitle='--Chọn Quận/Huyện--'
            districts={districts}
            value={district}
            setValue={setDistrict}
          />
        </Field>
      </div>
      <Field>
        <Label textColor='text-black' htmlFor='address'>
          Địa chỉ chính xác
        </Label>
        <InputReadOnly
          name='address'
          data={`${district ? `${districts.find((item) => item.district_id === district)?.district_name}, ` : ''} ${
            province ? provinces.find((item) => item.province_id === province)?.province_name : ''
          }`}
        />
      </Field>
    </div>
  )
}

export default Address
