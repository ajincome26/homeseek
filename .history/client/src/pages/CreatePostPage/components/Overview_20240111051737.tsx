import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { Field } from '~/components/Field'
import { Input, InputNumber, InputReadOnly } from '~/components/Input'
import { Select } from '~/components/Select'
import { categories, gender } from '~/constants/data'
import { useForm } from 'react-hook-form'
import { postSchema, PostSchema } from '~/utils/schema'
import { Label } from '~/components/Label'
import InputArea from '~/components/Input/InputArea'

export type FormCreatePost = PostSchema

const Overview = () => {
  const [category, setCategory] = useState('')
  const [target, setTarget] = useState('')
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
      <div className='flex flex-col gap-4'>
        <Field>
          <Label textColor='text-black' htmlFor='cate'>
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
          <Input className='cr-input-text' register={register} name='title' />
        </Field>
        <Field>
          <Label textColor='text-black' htmlFor='desc'>
            Nội dung mô tả
          </Label>
          <InputArea id='desc' className='cr-input-text' register={register} name='description' />
        </Field>
        <div className='w-1/2'>
          <Field>
            <Label textColor='text-black' htmlFor='username'>
              Thông tin liên hệ
            </Label>
            <InputReadOnly className='mb-5' id='username' data={''} />
          </Field>
          <Field>
            <Label textColor='text-black' htmlFor='phone'>
              Điện thoại
            </Label>
            <InputReadOnly className='mb-5' id='phone' data={''} />
          </Field>
          <Field>
            <Label textColor='text-black' htmlFor='price'>
              Giá cho thuê
            </Label>
            <InputNumber className='rounded-tl-md rounded-bl-md' id='price' unit='đồng' />
          </Field>
          <Field>
            <Label className='mt-5' textColor='text-black' htmlFor='acreage'>
              Diện tích
            </Label>
            <InputNumber className='rounded-tl-md rounded-bl-md' id='acreage' unit='m2' />
          </Field>
          <Field>
            <Label className='mt-5' textColor='text-black' htmlFor='target'>
              Đối tượng cho thuê
            </Label>
            <Select type='target' optionTitle='--Tất cả--' gender={gender as []} value={target} setValue={setTarget} />
          </Field>
        </div>
      </div>
    </div>
  )
}

export default Overview
