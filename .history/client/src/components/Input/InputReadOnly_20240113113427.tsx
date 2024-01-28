import { InputHTMLAttributes } from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  data: string
}

const InputReadOnly = ({ name, data, className }: InputProps) => {
  return (
    <div className='w-full'>
      <input type='text' id={name} value={data || ''} className={`cr-input-text bg-[#c5d3f1] ${className}`} readOnly />
    </div>
  )
}

export default InputReadOnly
