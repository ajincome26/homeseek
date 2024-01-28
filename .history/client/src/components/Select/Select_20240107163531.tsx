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
                  ? item?.district_id
                  : type === 'categries'
                    ? item?.code
                    : item.gender
            }
            value={
              type === 'province'
                ? item.province_id
                : type === 'district'
                  ? item?.district_id
                  : type === 'categries'
                    ? item?.code
                    : item.gender
            }
          >
            {type === 'province'
              ? item.province_name
              : type === 'district'
                ? item?.district_name
                : type === 'categries'
                  ? item?.value
                  : item.gender}
          </option>
        ))}
      </select>
      {/* {invalidFields && <small className='text-red-500'>{handleErrorText()}</small>} */}
    </div>
  )
}

export default Select
