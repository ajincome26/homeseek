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
    <input
      value={value || localValue}
      className={`${className} transition border rounded-md placeholder:text-sm`}
      autoComplete='on'
      onChange={handleChange}
      ref={ref}
      {...rest}
    />
  )
})

export default InputNumber
