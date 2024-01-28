import classNames from 'classnames'
import { InputHTMLAttributes, useState } from 'react'
import { CategoryType, GenderType } from '~/types/other.type'
import { District, Province } from '~/types/province.type'

export interface SelectProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string
  provinces?: Province[]
  districts?: District[]
  categories?: []
  gender?: []
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
  optionTitle: string
}

const Select = ({
  type,
  provinces,
  districts,
  categories,
  gender,
  value,
  setValue,
  optionTitle,
  onChange
}: SelectProps) => {
  // const [localValue, setLocalValue] = useState<string>(value as string)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setValue(value)
    // if (/^\d+$/.test(value) || value === '') {
    // thực thi onChange callback từ bên ngoài truyền vào props
    onChange && onChange(e)
    // cập nhật localValue state
    // setValue(value)
    // }
  }
  return (
    <div className={`flex flex-col gap-2 ${type === 'category' || type === 'target' ? 'w-full' : 'basis-[30%]'}`}>
      <select
        className={classNames(
          'px-4 py-2 text-gray-600 border-[2px] border-[#a0c7d6] rounded-md outline-none cursor-pointer hover:border-[#4b5fc2] cr-transition'
        )}
        value={value}
        onChange={(e) => handleChange} // value của select là value của option (ở đây là province_id)
      >
        <option value=''>{optionTitle}</option>
        {type === 'province'
          ? provinces?.map((item) => (
              <option key={item.province_id} value={item.province_id} className='bg-white text-primary'>
                {item.province_name}
              </option>
            ))
          : type === 'district'
            ? districts?.map((item) => (
                <option key={item.district_id} value={item.district_id} className='bg-white text-primary'>
                  {item.district_name}
                </option>
              ))
            : type === 'category'
              ? categories?.map((item: CategoryType) => (
                  <option key={item.id} value={item.name} className='bg-white text-primary'>
                    {item.name}
                  </option>
                ))
              : gender?.map((item: GenderType) => (
                  <option key={item.id} value={item.value} className='bg-white text-primary'>
                    {item.name}
                  </option>
                ))}
      </select>
    </div>
  )
}

export default Select
