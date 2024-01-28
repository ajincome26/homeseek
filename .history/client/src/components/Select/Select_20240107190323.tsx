import { InputHTMLAttributes } from 'react'
import { Province } from '~/types/province.type'

const type = 'province'

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
          'flex items-center justify-between w-48 h-10 px-4 py-2 rounded-md outline-none cursor-pointer md:grow xl:grow-0 xl:w-48 hover:bg-opacity-80',
          { 'bg-primary text-white': isActiveSortBy('price'), 'bg-white': !isActiveSortBy('price') }
        )}
        value={order}
        onChange={(e) => handleNavigatePrice(e.target.value as Exclude<ProductListParams['order'], undefined>)}
      >
        {provinces?.map((item: Province) => (
          <option value={orderConst.DESC} className='bg-white text-secondary'>
            item.province_name
          </option>
        ))}
      </select>
      {/* {invalidFields && <small className='text-red-500'>{handleErrorText()}</small>} */}
    </div>
  )
}

export default Select
