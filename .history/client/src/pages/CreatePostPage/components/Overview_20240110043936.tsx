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
      <Field>
        <Label htmlFor='title'>Tiêu đề</Label>
        <Input register={register} name='title' errorMessage={errors.title?.message} />
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
