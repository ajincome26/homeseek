import { InputHTMLAttributes } from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  data: string
}

const InputReadOnly = ({ data }: InputProps) => {
  return (
    <div className='w-full'>
      <input type='text' id={title} value={data || ''} className='mt-2 cr-input-text bg-[#c5d3f1]' readOnly />
    </div>
  )
}

export default InputReadOnly
