import { useState } from 'react'
import { Field } from '~/components/Field'
import { Input, InputNumber } from '~/components/Input'
import { Select } from '~/components/Select'
import { categories, gender } from '~/constants/data'
import { PostSchema } from '~/utils/schema'
import { Label } from '~/components/Label'
import InputArea from '~/components/Input/InputArea'
import { useAuth } from '~/contexts/auth.context'
import { Control, Controller, UseFormRegister } from 'react-hook-form'
import { FormPost } from '../CreatePost'

export type FormCreatePost = PostSchema

export interface OverviewProps {
  register: UseFormRegister<FormPost>
  control?: Control<FormPost>
}

const Overview = ({ register, control }: OverviewProps) => {
  const { userInfo } = useAuth()
  const [category, setCategory] = useState('')
  const [target, setTarget] = useState('')

  return (
    <div>
      <h1 className='mb-5 text-2xl font-semibold'>Thông tin mô tả</h1>
      <div className='flex flex-col gap-4'>
        <Field>
          <Label textColor='text-black'>Loại chuyên mục</Label>
          <Controller
            control={control}
            name='category'
            render={({ field: { onChange } }) => {
              return (
                <Select
                  type='category'
                  optionTitle='--Chọn loại chuyên mục--'
                  categories={categories as []}
                  value={category}
                  setValue={setCategory}
                  onChange={onChange}
                />
              )
            }}
          />
        </Field>
        <Field>
          <Label textColor='text-black' htmlFor='title'>
            Tiêu đề
          </Label>
          <Input name='title' register={register} className='cr-input-text' relative />
        </Field>
        <Field>
          <Label textColor='text-black' htmlFor='description'>
            Nội dung mô tả
          </Label>
          <InputArea name='description' register={register} className='cr-input-text' relative />
        </Field>
        <div className='w-1/2'>
          <Field>
            <Label textColor='text-black'>Thông tin liên hệ</Label>
            <input value={userInfo?.name || ''} className={`cr-input-text bg-[#c5d3f1]`} readOnly />
          </Field>
          <Field>
            <Label className='mt-5' textColor='text-black'>
              Điện thoại
            </Label>
            <input value={userInfo?.phone_number || ''} className={`cr-input-text bg-[#c5d3f1]`} readOnly />
          </Field>
          <Field>
            <Label className='mt-5' textColor='text-black' htmlFor='price'>
              Giá cho thuê
            </Label>
            <Controller
              control={control}
              name='price'
              render={({ field: { onChange, value, ref } }) => {
                return (
                  <InputNumber
                    className='rounded-tl-md rounded-bl-md'
                    unit='đồng'
                    onChange={onChange}
                    value={value}
                    ref={ref}
                  />
                )
              }}
            />
          </Field>
          <Field>
            <Label className='mt-5' textColor='text-black' htmlFor='price'>
              Giá đặt cọc
            </Label>
            <Controller
              control={control}
              name='deposit'
              render={({ field: { onChange, value, ref } }) => {
                return (
                  <InputNumber
                    className='rounded-tl-md rounded-bl-md'
                    unit='đồng'
                    onChange={onChange}
                    value={value}
                    ref={ref}
                  />
                )
              }}
            />
          </Field>
          <Field>
            <Label className='mt-5' textColor='text-black' htmlFor='acreage'>
              Diện tích
            </Label>
            <Controller
              control={control}
              name='acreage'
              render={({ field: { onChange, value, ref } }) => {
                return (
                  <InputNumber
                    className='rounded-tl-md rounded-bl-md'
                    unit='m2'
                    onChange={onChange}
                    value={value}
                    ref={ref}
                  />
                )
              }}
            />
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
