import { Link, useNavigate } from 'react-router-dom'
import { Button } from '~/components/Button'
import { Field } from '~/components/Field'
import { Input, InputPassword } from '~/components/Input'
import { Label } from '~/components/Label'
import { path } from '~/constants/path'
import { useForm } from 'react-hook-form'
import { RegisterSchema, registerSchema } from '~/utils/schema'
import { yupResolver } from '@hookform/resolvers/yup'
import icons from '~/utils/icons'
import { useMutation } from '@tanstack/react-query'
import authApi from '~/auth.api'
import { useAuth } from '~/contexts/auth.context'
import { toast } from 'react-toastify'
import { ResponseError } from '~/types/utils.type'
import { isAxiosUnprocessableEntityError } from '~/utils/utils'

const { FcGoogle } = icons

export type FormRegister = RegisterSchema

const RegisterPage = () => {
  const navigate = useNavigate()
  const { setIsLoggedIn, setUserInfo } = useAuth()
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<FormRegister>({
    resolver: yupResolver(registerSchema)
  })
  const registerMutation = useMutation({
    mutationFn: (body: FormRegister) => {
      return authApi.registerAccount(body)
    }
  })

  const handleSignUp = (data: FormRegister) => {
    registerMutation.mutate(data, {
      onSuccess: (data) => {
        console.log(data)
        setIsLoggedIn(true)
        setUserInfo(data.data.result.user)
        navigate('/')
        toast.success('Đăng ký tài khoản thành công', { autoClose: 1000 })
      },
      onError: (error) => {
        if (isAxiosUnprocessableEntityError<ResponseError<FormRegister>>(error)) {
          const formError = error.response?.data.data
          if (formError) {
            Object.keys(formError).forEach((key) =>
              setError(key as keyof FormRegister, {
                message: formError[key as keyof FormRegister],
                type: 'Server'
              })
            )
          }
        }
      }
    })
  }
  return (
    <div className='flex items-center justify-center px-5 py-8 xl:min-h-[85vh]'>
      <form
        onSubmit={handleSubmit(handleSignUp)}
        className='relative flex flex-col w-full md:w-[60%] lg:w-[50%] xl:w-[40%] 2xl:w-[35%] min-h-full p-8 mx-auto rounded shadow-2xl bg-primary'
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
            <Label htmlFor='phone_number'>Số điện thoại</Label>
            <Input
              name='phone_number'
              register={register}
              placeholder='Nhập số điện thoại'
              errorMessage={errors.phone_number?.message}
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
            <Label htmlFor='confirm_password'>Xác nhận mật khẩu</Label>
            <InputPassword
              name='confirm_password'
              register={register}
              placeholder='Nhập lại mật khẩu'
              errorMessage={errors.confirm_password?.message}
            />
          </Field>
        </div>

        <Button
          type='submit'
          className='px-6 py-3 my-4 text-[#3d3d3d] uppercase bg-secondary'
          hover
          isLoading={registerMutation.isPending}
        >
          Đăng ký
        </Button>

        <div className='text-center'>
          <span className='text-white'>Bạn đã có tài khoản?</span>
          <Link to={path.LOGIN} className='ml-2 font-medium transition text-secondary cr-hover-text'>
            Đăng nhập tại đây
          </Link>
        </div>
        <div className='relative mt-8 text-center'>
          <div className='absolute h-[1px] w-full bg-white top-1/2'></div>
          <span className='absolute px-4 text-white bg-primary bottom-[-10px] left-[45%] text-sm'>OR</span>
        </div>
        <Link to={'/'} className='flex items-center self-center justify-center w-20 h-10 mt-8 bg-red-300'>
          <FcGoogle size={25} />
        </Link>
      </form>
    </div>
  )
}

export default RegisterPage
