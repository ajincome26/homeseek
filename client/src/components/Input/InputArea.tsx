import { InputHTMLAttributes } from 'react'
import type { FieldValues, FieldPath, UseFormRegister } from 'react-hook-form'

export interface InputProps<TFieldValues extends FieldValues> extends InputHTMLAttributes<HTMLInputElement> {
  name: FieldPath<TFieldValues>
  errorMessage?: string
  register: UseFormRegister<TFieldValues>
  relative?: boolean
}

const InputArea = <TFieldValues extends FieldValues = FieldValues>({
  name,
  errorMessage,
  register,
  className,
  relative
}: InputProps<TFieldValues>) => {
  return (
    <div className={`${relative ? '' : 'relative'} w-full`}>
      <textarea id={name} {...register(name)} className={className} rows={7} autoComplete='on' />
      {errorMessage && <div className='text-sm text-red-500 min-h-[1rem] leading-4'>{errorMessage}</div>}
    </div>
  )
}

export default InputArea
