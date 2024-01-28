import { InputHTMLAttributes } from 'react'
import type { FieldValues, FieldPath, UseFormRegister } from 'react-hook-form'

export interface InputProps<TFieldValues extends FieldValues> extends InputHTMLAttributes<HTMLInputElement> {
  name: FieldPath<TFieldValues>
  errorMessage?: string
  register: UseFormRegister<TFieldValues>
  isHover?: boolean
}

const Input = <TFieldValues extends FieldValues = FieldValues>({
  className,
  type,
  name,
  children,
  errorMessage,
  register,
  isHover,
  ...props
}: InputProps<TFieldValues>) => {
  return (
    <div className='relative w-full'>
      <input
        id={name}
        type={type || 'text'}
        {...register(name)}
        {...props}
        className={`mb-[6px] border rounded-lg py-3 bg-grayField focus:border-primary transition w-full focus:bg-white ${
          children ? 'pl-4 pr-10' : 'px-4'
        } ${isHover ? 'hover:border-primary' : ''} ${className}`}
        autoComplete='on'
      />
      <span className='absolute top-1/2 right-3 translate-y-[-110%] cursor-pointer text-grayDark'>{children}</span>
      {errorMessage && <div className='text-sm text-red-500 min-h-[1rem] leading-4'>{errorMessage}</div>}
    </div>
  )
}

export default Input
