import { InputHTMLAttributes } from 'react'
import { UseFormRegister, FieldValues, FieldPath } from 'react-hook-form'

export interface InputProps<TFieldValues extends FieldValues> extends InputHTMLAttributes<HTMLInputElement> {
  name: FieldPath<TFieldValues>
  register: UseFormRegister<TFieldValues>
  data: string
}

const InputReadOnly = <TFieldValues extends FieldValues = FieldValues>({
  name,
  data,
  className,
  register
}: InputProps<TFieldValues>) => {
  return (
    <div className='w-full'>
      <input
        type='text'
        id={name}
        {...register(name)}
        value={data || ''}
        className={`cr-input-text bg-[#c5d3f1] ${className}`}
        disabled
      />
    </div>
  )
}

export default InputReadOnly
