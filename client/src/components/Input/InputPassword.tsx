import { useState } from 'react'
import Input, { InputProps } from './Input'
import type { FieldValues } from 'react-hook-form'
import icons from '~/utils/icons'

const { AiOutlineEye, AiOutlineEyeInvisible } = icons

const InputPassword = <TFieldValues extends FieldValues = FieldValues>(props: InputProps<TFieldValues>) => {
  const [togglePassword, setTogglePassword] = useState(false)
  return (
    <Input type={togglePassword ? 'text' : 'password'} {...props}>
      {togglePassword ? (
        <AiOutlineEyeInvisible onClick={() => setTogglePassword((prev) => !prev)} />
      ) : (
        <AiOutlineEye onClick={() => setTogglePassword((prev) => !prev)} />
      )}
    </Input>
  )
}

export default InputPassword
