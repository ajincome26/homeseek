import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { Field } from '~/components/Field'
import { Input } from '~/components/Input'
import { Select } from '~/components/Select'
import { categories } from '~/constants/data'
import { useForm } from 'react-hook-form'
import { postSchema, PostSchema } from '~/utils/schema'
import { Label } from '~/components/Label'

export type FormCreatePost = PostSchema

const Overview = () => {
  const [category, setCategory] = useState('')
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<FormCreatePost>({
    resolver: yupResolver(postSchema)
  })
  return (
    <div>
      <h1 className='mb-5 text-2xl font-semibold'>Thông tin mô tả</h1>
      <Field>
        <Label textColor='text-black' htmlFor='title'>
          Loại chuyên mục
        </Label>
        <Select
          type='category'
          optionTitle='--Chọn loại chuyên mục--'
          categories={categories as []}
          value={category}
          setValue={setCategory}
        />
      </Field>
      <Field>
        <Label textColor='text-black' htmlFor='title'>
          Tiêu đề
        </Label>
        <Input
          className='px-3 py-2 border-[2px] border-[#a0c7d6] outline-none focus:border-[#4b5fc2] cr-transition flex-1 hover:border-[#a0c7d6]'
          register={register}
          name='title'
          errorMessage={errors.title?.message}
        />
      </Field>
      <div>
        <label htmlFor='desc' className='font-semibold'>
          Nội dung mô tả
        </label>
        <textarea
          id='desc'
          className='mt-2 cr-input-text'
          rows={7}
          // value={payload.description}
          // onChange={(e) => setPayload((prev) => ({ ...prev, description: e.target.value }))}
          // onFocus={() => setInvalidFields([])}
        />
      </div>
    </div>
  )
}

export default Overview
