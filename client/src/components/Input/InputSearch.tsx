import { InputHTMLAttributes } from 'react'
import type { FieldValues, FieldPath, UseFormRegister } from 'react-hook-form'

export interface InputProps<TFieldValues extends FieldValues> extends InputHTMLAttributes<HTMLInputElement> {
  name: FieldPath<TFieldValues>
  register: UseFormRegister<TFieldValues>
}

const InputSearch = <TFieldValues extends FieldValues = FieldValues>({
  name,
  register,
  className,
  type,
  ...rest
}: InputProps<TFieldValues>) => {
  return (
    <input
      id={name}
      type={type || 'text'}
      {...register(name)}
      {...rest}
      className={`${className} w-full transition border rounded-md placeholder:text-sm`}
      autoComplete='on'
    />
  )
}

export default InputSearch
