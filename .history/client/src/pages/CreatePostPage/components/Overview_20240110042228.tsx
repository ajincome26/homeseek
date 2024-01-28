import { useState } from 'react'
import { Select } from '~/components/Select'
import { categories } from '~/constants/data'

const Overview = () => {
  const [category, setCategory] = useState('')
  return (
    <div>
      <h1 className='mb-5 text-2xl font-semibold'>Địa chỉ cho thuê</h1>
      <div className='flex gap-10 mb-5'>
        <Select
          type='category'
          label='Loại chuyên mục'
          optionTitle='--Chọn loại chuyên mục--'
          categories={categories as []}
          value={category}
          setValue={setCategory}
        />
      </div>
      <div>
        <label htmlFor='desc' className='font-semibold'>
          Nội dung mô tả
        </label>
        <textarea
          type='text'
          id='desc'
          className='mt-2 cr-input-text'
          rows={7}
          value={payload.description}
          onChange={(e) => setPayload((prev) => ({ ...prev, description: e.target.value }))}
          onFocus={() => setInvalidFields([])}
        />
      </div>
    </div>
  )
}

export default Overview
