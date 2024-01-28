import classNames from 'classnames'
import { InputHTMLAttributes } from 'react'
import { Province } from '~/types/province.type'

export interface SelectProps extends InputHTMLAttributes<HTMLInputElement> {
  provinces: Province[]
}

const Select = ({ provinces }: SelectProps) => {
  return (
    <div className='flex flex-col gap-2 basis-[30%]'>
      <label htmlFor='address-select' className='font-semibold'>
        Tỉnh/Thành phố
      </label>
      {/* <select
        id='address-select'
        className='px-2 py-1 text-gray-600 border-[2px] border-[#a0c7d6] rounded-md outline-none cursor-pointer hover:border-[#4b5fc2] cr-transition'
        // value={value}
        // onChange={(e) => (!name ? setValue(e.target.value) : setValue((prev) => ({ ...prev, [name]: e.target.value })))}
        // onFocus={() => setInvalidFields([])}
      >
        <option value=''>--Chọn Tỉnh/TP--</option>
        {provinces?.map((item) => (
          <option
            key={
              type === 'province'
                ? item.province_id
                : type === 'district'
                  ? 'xxxx'
                  : type === 'categries'
                    ? 'yyyy'
                    : 'zzzz'
            }
            value={
              type === 'province'
                ? item.province_id
                : type === 'district'
                  ? 'xxxx'
                  : type === 'categries'
                    ? 'yyyy'
                    : 'zzzz'
            }
          >
            {type === 'province'
              ? item.province_name
              : type === 'district'
                ? 'yyyy'
                : type === 'categries'
                  ? 'zzzz'
                  : 'zzzz'}
          </option>
        ))}
      </select> */}
      <select
        className={classNames(
          'px-2 py-1 text-gray-600 border-[2px] border-[#a0c7d6] rounded-md outline-none cursor-pointer hover:border-[#4b5fc2] cr-transition'
        )}
      >
        <option value=''>--Chọn Tỉnh/TP--</option>
        {provinces?.map((item) => (
          <option value={item.province_name} className='bg-white text-primary'>
            {item.province_name}
          </option>
        ))}
      </select>
      {/* {invalidFields && <small className='text-red-500'>{handleErrorText()}</small>} */}
    </div>
  )
}

export default Select
