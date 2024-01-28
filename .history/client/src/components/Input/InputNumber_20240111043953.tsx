import { forwardRef, InputHTMLAttributes, useState } from 'react'

export interface InputNumberProps extends InputHTMLAttributes<HTMLInputElement> {
  unit?: string
}

const InputNumber = forwardRef<HTMLInputElement, InputNumberProps>(function InputNumberInner(
  { className, onChange, value = '', unit, ...rest },
  ref
) {
  const [localValue, setLocalValue] = useState<string>(value as string)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    if (/^\d+$/.test(value) || value === '') {
      // thực thi onChange callback từ bên ngoài truyền vào props
      onChange && onChange(e)
      // cập nhật localValue state
      setLocalValue(value)
    }
  }

  return (
    <div className='w-1/2'>
      <div className='flex'>
        <input
          value={value || localValue}
          className={`px-3 py-2 border-[2px] border-[#a0c7d6] outline-none focus:border-[#4b5fc2] cr-transition box-border flex-1 ${className}`}
          autoComplete='on'
          onChange={handleChange}
          ref={ref}
          {...rest}
        />
        {unit && (
          <span className='min-h-full w-[50px] bg-slate-300 flex items-center justify-center rounded-tr-md rounded-br-md border-[2px] border-l-0 border-[#a0c7d6]'>
            {unit}
          </span>
        )}
      </div>
      {unit === 'đồng' && <p className='mt-2 text-xs'>Nhập đầy đủ số, ví dụ 1 triệu thì nhập là 1000000</p>}
    </div>
  )
})

export default InputNumber
