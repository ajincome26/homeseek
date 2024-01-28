import { Link } from 'react-router-dom'
import { Button } from '~/components/Button'
import { Field } from '~/components/Field'
import { Input, InputPassword } from '~/components/Input'
import { Label } from '~/components/Label'
import { path } from '~/constants/path'
import { useForm } from 'react-hook-form'
import { RegisterSchema, registerSchema } from '~/utils/schema'
import { yupResolver } from '@hookform/resolvers/yup'

export type FormRegister = RegisterSchema

const RegisterPage = () => {
  const {
    register,
    formState: { errors }
  } = useForm<FormRegister>({
    resolver: yupResolver(registerSchema)
  })
  return (
    <div className='flex items-center justify-center px-5 py-8 xl:min-h-[85vh]'>
      <form
        // onSubmit={handleSubmit(handleSignUp)}
        className='flex flex-col w-full md:w-[60%] lg:w-[50%] xl:w-[40%] 2xl:w-[35%] min-h-full p-8 mx-auto rounded shadow-2xl bg-primary'
      >
        <h2 className='mb-2 text-xl font-semibold text-secondary'>Đăng Ký</h2>
        <Field>
          <Label htmlFor='email'>Email</Label>
          <Input name='email' register={register} placeholder='Enter your email' errorMessage={errors.email?.message} />
        </Field>
        <Field>
          <Label htmlFor='password'>Mật khẩu</Label>
          <InputPassword
            name='password'
            register={register}
            placeholder='Nhập mật khẩu'
            errorMessage={errors.password?.message}
          />
        </Field>
        <Field>
          <Label htmlFor='cpassword'>Xác nhận mật khẩu</Label>
          <InputPassword
            name='cpassword'
            register={register}
            placeholder='Nhập lại mật khẩu'
            errorMessage={errors.cpassword?.message}
          />
        </Field>

        <Button
          type='submit'
          className='px-6 py-3 my-4 text-[#3d3d3d]'
          hover
          // isLoading={registerMutation.isLoading}
        >
          Register
        </Button>

        <div className='text-center'>
          <span className='text-white'>Bạn đã có tài khoản?</span>
          <Link to={path.LOGIN} className='ml-2 font-medium text-white transition hover:text-third'>
            Đăng nhập tại đây
          </Link>
        </div>
      </form>
    </div>
  )
}

export default RegisterPage
