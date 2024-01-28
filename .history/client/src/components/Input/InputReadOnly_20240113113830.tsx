import { InputHTMLAttributes } from 'react'
import { UseFormRegister } from 'react-hook-form'
import { FormPost } from '~/pages/CreatePostPage/CreatePost'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  data: string
  register?: UseFormRegister<FormPost>
}

const InputReadOnly = ({ name, data, className, register }: InputProps) => {
  return (
    <div className='w-full'>
      <input
        type='text'
        id={name}
        {...register(name)}
        value={data || ''}
        className={`cr-input-text bg-[#c5d3f1] ${className}`}
        readOnly
      />
    </div>
  )
}

export default InputReadOnly
