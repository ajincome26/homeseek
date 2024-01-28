import { forwardRef, InputHTMLAttributes, useState } from 'react'

export interface InputNumberProps extends InputHTMLAttributes<HTMLInputElement> {}

const InputNumber = forwardRef<HTMLInputElement, InputNumberProps>(function InputNumberInner(
  { className, onChange, value = '', ...rest },
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
    <div className='flex mt-2'>
      <input
        value={value || localValue}
        className={`px-3 py-1 border-[2px] border-[#a0c7d6] outline-none focus:border-[#4b5fc2] cr-transition box-border flex-1 ${className}`}
        autoComplete='on'
        onChange={handleChange}
        ref={ref}
        {...rest}
      />
    </div>
  )
})

export default InputNumber
