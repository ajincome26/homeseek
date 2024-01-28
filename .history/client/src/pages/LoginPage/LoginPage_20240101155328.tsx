import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { Button } from '~/components/Button'
import { Field } from '~/components/Field'
import { Input, InputPassword } from '~/components/Input'
import { Label } from '~/components/Label'
import { path } from '~/constants/path'
import { useForm } from 'react-hook-form'
import { loginSchema, LoginSchema } from '~/utils/schema'
import { yupResolver } from '@hookform/resolvers/yup'
import icons from '~/utils/icons'
import { useMutation } from '@tanstack/react-query'
import authApi from '~/apis/auth.api'
import { useAuth } from '~/contexts/auth.context'
import { toast } from 'react-toastify'
import { ResponseError } from '~/types/utils.type'
import { isAxiosUnprocessableEntityError } from '~/utils/utils'
import { useEffect } from 'react'
import { setAccessToken, setRefreshToken, setUserInfoToStorage } from '~/utils/auth'
import { User } from '~/types/user.type'

const { FcGoogle } = icons

export type FormLogin = LoginSchema

const LoginPage = () => {
  const navigate = useNavigate()
  const { setIsLoggedIn, setUserInfo } = useAuth()
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<FormLogin>({
    resolver: yupResolver(loginSchema)
  })

  const [params] = useSearchParams()
  useEffect(() => {
    const access_token = params.get('access_token')
    const refresh_token = params.get('refresh_token')
    const email = params.get('email') as string
    const name = params.get('name') as string
    const phone_number = params.get('phone_number') as string
    console.log('xxx')
    // Dựa vào new_user và verify để biết là user mới hay user cũ và đã verify email hay chưa !!!
    const new_user = params.get('new_user') // có thể check thêm là 0 hay 1 để hiển thị thông báo gì đó (phân biệt login và register)
    if (access_token && refresh_token) {
      console.log('yyy')
      setIsLoggedIn(true)
      setUserInfo({ email, name, phone_number } as User)
      setUserInfoToStorage({ email, name, phone_number } as User)
      setAccessToken(access_token as string)
      setRefreshToken(refresh_token as string)
      if (new_user == '1') {
        toast.success('Đăng ký thành công', { autoClose: 2000 })
      } else {
        toast.success('Đăng nhập thành công', { autoClose: 2000 })
      }
      navigate('/')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getGoogleAuthUrl = () => {
    const { VITE_GOOGLE_CLIENT_ID, VITE_GOOGLE_REDIRECT_URI } = import.meta.env
    const url = `https://accounts.google.com/o/oauth2/v2/auth`
    const query = {
      client_id: VITE_GOOGLE_CLIENT_ID,
      redirect_uri: VITE_GOOGLE_REDIRECT_URI,
      response_type: 'code',
      scope: [
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email'
      ].join(' '),
      prompt: 'consent',
      access_type: 'offline' // Sẽ lấy thêm được refresh_token nữa
    }
    const queryString = new URLSearchParams(query).toString()
    return `${url}?${queryString}`
  }
  const googleOAuthUrl = getGoogleAuthUrl()

  const loginMutation = useMutation({
    mutationFn: (body: FormLogin) => {
      return authApi.login(body)
    }
  })

  const handleLogin = (data: FormLogin) => {
    loginMutation.mutate(data, {
      onSuccess: (data) => {
        setIsLoggedIn(true)
        setUserInfo(data.data.result.user)
        navigate('/')
        toast.success('Đăng nhập thành công', { autoClose: 1000 })
      },
      onError: (error) => {
        if (isAxiosUnprocessableEntityError<ResponseError<FormLogin>>(error)) {
          const formError = error.response?.data.data
          if (formError) {
            Object.keys(formError).forEach((key) =>
              setError(key as keyof FormLogin, {
                message: formError[key as keyof FormLogin],
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
        onSubmit={handleSubmit(handleLogin)}
        className='relative flex flex-col w-full md:w-[60%] lg:w-[50%] xl:w-[40%] 2xl:w-[35%] min-h-full p-8 mx-auto rounded shadow-2xl bg-primary'
      >
        <h2 className='mb-2 text-[22px] font-medium text-secondary'>Đăng Nhập</h2>
        <Field>
          <Label htmlFor='email'>Email</Label>
          <Input name='email' register={register} placeholder='Nhập email' errorMessage={errors.email?.message} />
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

        <Button
          type='submit'
          className='px-6 py-3 my-4 text-[#3d3d3d] uppercase bg-secondary'
          hover
          isLoading={loginMutation.isPending}
        >
          Đăng nhập
        </Button>

        <div className='text-center'>
          <span className='text-white'>Bạn chưa có tài khoản?</span>
          <Link to={path.REGISTER} className='ml-2 font-medium transition text-secondary cr-hover-text'>
            Đăng ký tại đây
          </Link>
        </div>
        <div className='relative mt-8 text-center'>
          <div className='absolute h-[1px] w-full bg-white top-1/2'></div>
          <span className='absolute px-4 text-white bg-primary bottom-[-10px] left-[45%] text-sm'>OR</span>
        </div>
        <Link to={googleOAuthUrl} className='flex items-center self-center justify-center w-20 h-10 mt-8 bg-red-300'>
          <FcGoogle size={25} />
        </Link>
      </form>
    </div>
  )
}

export default LoginPage
