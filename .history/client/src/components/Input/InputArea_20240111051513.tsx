import { InputHTMLAttributes } from 'react'
import type { FieldValues, FieldPath, UseFormRegister } from 'react-hook-form'

export interface InputProps<TFieldValues extends FieldValues> extends InputHTMLAttributes<HTMLInputElement> {
  name: FieldPath<TFieldValues>
  errorMessage?: string
  register: UseFormRegister<TFieldValues>
}

const InputArea = <TFieldValues extends FieldValues = FieldValues>({
  name,
  children,
  errorMessage,
  register,
  className
}: InputProps<TFieldValues>) => {
  return (
    <div className='relative w-full'>
      <textarea id={name} {...register(name)} className={className} rows={7} autoComplete='on' />
      <span className='absolute top-1/2 right-3 translate-y-[-110%] cursor-pointer text-grayDark'>{children}</span>
      {errorMessage && <div className='text-sm text-red-500 min-h-[1rem] leading-4'>{errorMessage}</div>}
    </div>
  )
}

export default InputArea
