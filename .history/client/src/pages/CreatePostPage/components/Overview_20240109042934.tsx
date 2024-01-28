import { Select } from '~/components/Select'
import { categories } from '~/constants/data'

const Overview = () => {
  return (
    <div>
      <h1 className='mb-5 text-2xl font-semibold'>Địa chỉ cho thuê</h1>
      <div className='flex gap-10 mb-5'>
        <Select
          type='category'
          label='Loại chuyên mục'
          optionTitle='--Chọn loại chuyên mục--'
          categories={categories as []}
        />
      </div>
    </div>
  )
}

export default Overview
