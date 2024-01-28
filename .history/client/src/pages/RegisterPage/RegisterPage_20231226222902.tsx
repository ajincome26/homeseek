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
        <h2 className='mb-2 text-[22px] font-medium text-secondary'>Đăng Ký</h2>
        <Field>
          <Label htmlFor='name'>Tên</Label>
          <Input name='name' register={register} placeholder='Nhập tên' errorMessage={errors.name?.message} />
        </Field>
        <div className='grid grid-cols-2 gap-2'>
          <Field>
            <Label htmlFor='email'>Email</Label>
            <Input name='email' register={register} placeholder='Nhập email' errorMessage={errors.email?.message} />
          </Field>
          <Field>
            <Label htmlFor='phone'>Số điện thoại</Label>
            <Input
              name='phone'
              register={register}
              placeholder='Nhập số điện thoại'
              errorMessage={errors.phone?.message}
            />
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
        </div>

        <Button
          type='submit'
          className='px-6 py-3 my-4 text-[#3d3d3d] uppercase'
          hover
          // isLoading={registerMutation.isLoading}
        >
          Đăng ký
        </Button>

        <div className='text-center'>
          <span className='text-white'>Bạn đã có tài khoản?</span>
          <Link to={path.LOGIN} className='ml-2 font-medium transition text-secondary cr-hover-text'>
            Đăng nhập tại đây
          </Link>
        </div>
      </form>
      <div className='h-[1px] bg-white absolute bottom-0'>
        <span>OR</span>
      </div>
    </div>
  )
}

export default RegisterPage
