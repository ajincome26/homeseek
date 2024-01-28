import { InputHTMLAttributes } from 'react'
import type { FieldValues, FieldPath, UseFormRegister } from 'react-hook-form'

export interface InputProps<TFieldValues extends FieldValues> extends InputHTMLAttributes<HTMLInputElement> {
  title: string
  data: string
}

const InputReadOnly = <TFieldValues extends FieldValues = FieldValues>({ title, data }: InputProps<TFieldValues>) => {
  return (
    <div className=''>
      <label className='font-semibold' htmlFor={title}>
        {title}
      </label>
      <input type='text' id={title} value={data || ''} className='mt-2 cr-input-text bg-[#c5d3f1]' readOnly />
    </div>
  )
}

export default InputReadOnly
