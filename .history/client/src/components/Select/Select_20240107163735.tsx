const data = [
  {
    province_id: '92',
    province_name: 'Thành phố Cần Thơ',
    province_type: 'Thành phố Trung ương'
  },
  {
    province_id: '48',
    province_name: 'Thành phố Đà Nẵng',
    province_type: 'Thành phố Trung ương'
  },
  {
    province_id: '01',
    province_name: 'Thành phố Hà Nội',
    province_type: 'Thành phố Trung ương'
  }
]
const type = 'province'
const Select = () => {
  return (
    <div className='flex flex-col gap-2 basis-[30%]'>
      <label htmlFor='address-select' className='font-semibold'>
        Tỉnh/Thành phố
      </label>
      <select
        id='address-select'
        className='px-2 py-1 text-gray-600 border-[2px] border-[#a0c7d6] rounded-md outline-none cursor-pointer hover:border-[#4b5fc2] cr-transition'
        // value={value}
        // onChange={(e) => (!name ? setValue(e.target.value) : setValue((prev) => ({ ...prev, [name]: e.target.value })))}
        // onFocus={() => setInvalidFields([])}
      >
        <option value=''>--Chọn Tỉnh/TP--</option>
        {data?.map((item) => (
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
      </select>
      {/* {invalidFields && <small className='text-red-500'>{handleErrorText()}</small>} */}
    </div>
  )
}

export default Select
