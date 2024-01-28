import { Select } from '~/components/Select'

const Address = () => {
  return (
    <div>
      <h1 className='mb-5 text-2xl font-semibold'>Địa chỉ cho thuê</h1>
      <div className='flex gap-10 mb-5'>
        <Select />
      </div>
    </div>
  )
}

export default Address
