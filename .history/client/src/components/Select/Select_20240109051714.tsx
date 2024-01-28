import classNames from 'classnames'
import { InputHTMLAttributes } from 'react'
import { PiCaretDownBold } from 'react-icons/pi'
import { CategoryType } from '~/types/category.type'
import { District, Province } from '~/types/province.type'

export interface SelectProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string
  provinces?: Province[]
  districts?: District[]
  categories?: []
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
  label: string
  optionTitle: string
}

const Select = ({ type, provinces, districts, categories, value, setValue, label, optionTitle }: SelectProps) => {
  return (
    <div className={`flex flex-col gap-2 ${type === 'category' ? '' : 'basis-[30%]'}`}>
      <label htmlFor='address-select' className='font-semibold'>
        {label}
      </label>
      <select
        className={classNames(
          'px-2 py-1 text-gray-600 border-[2px] border-[#a0c7d6] rounded-md outline-none cursor-pointer hover:border-[#4b5fc2] cr-transition'
        )}
        value={value}
        onChange={(e) => setValue(e.target.value)} // value của select là value của option (ở đây là province_id)
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
            : categories?.map((item: CategoryType) => (
                <option key={item.id} value={item.name} className='bg-white text-primary'>
                  {item.name}
                </option>
              ))}
        <PiCaretDownBold className='absolute top-0 right-0' color='black' />
      </select>
    </div>
  )
}

export default Select
