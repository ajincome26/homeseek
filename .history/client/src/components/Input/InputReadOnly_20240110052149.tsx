import { InputHTMLAttributes } from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string
  data: string
}

const InputReadOnly = ({ title, data }: InputProps) => {
  return (
    <div className='w-full'>
      <label className='font-semibold' htmlFor={title}>
        {title}
      </label>
      <input type='text' id={title} value={data || ''} className='mt-2 cr-input-text bg-[#c5d3f1]' readOnly />
    </div>
  )
}

export default InputReadOnly
