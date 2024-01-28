import { InputHTMLAttributes } from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string
  data: string
}

const InputReadOnly = ({ id, data }: InputProps) => {
  return (
    <div className='w-full'>
      <input type='text' id={id} value={data || ''} className='mt-2 cr-input-text bg-[#c5d3f1]' readOnly />
    </div>
  )
}

export default InputReadOnly
