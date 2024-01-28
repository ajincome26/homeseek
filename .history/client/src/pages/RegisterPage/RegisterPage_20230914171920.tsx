import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { registerSchema, RegisterSchema } from '~/utils/schema'
import { Link, useNavigate } from 'react-router-dom'
import { Label } from '~/components/Label'
import { Input, InputPassword } from '~/components/Input'
import { Field } from '~/components/Field'
import { Button } from '~/components/Button'
import omit from 'lodash/omit'
import { isAxiosUnprocessableEntityError } from '~/utils/utils'
import { ResponseError } from '~/types/utils.type'
import { toast } from 'react-toastify'
import { useAuth } from '~/contexts/auth.context'
import { path } from '~/constants/path'
import authApi from '~/apis/auth.api'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'

export type FormRegister = RegisterSchema

const RegisterPage = () => {
  const { t } = useTranslation('home')
  const { setIsLoggedIn, setUserInfo } = useAuth()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<FormRegister>({
    resolver: yupResolver(registerSchema)
  })

  const registerMutation = useMutation({
    mutationFn: (body: Omit<FormRegister, 'cpassword'>) => {
      return authApi.registerAccount(body)
    }
  })

  const handleSignUp = (data: FormRegister) => {
    const payload = omit(data, ['cpassword'])
    registerMutation.mutate(payload, {
      onSuccess: (data) => {
        setIsLoggedIn(true)
        setUserInfo(data.data.data.user)
        navigate('/')
        toast.success('Đăng ký tài khoản thành công', { autoClose: 1000 })
      },
      onError: (error) => {
        if (isAxiosUnprocessableEntityError<ResponseError<Omit<FormRegister, 'cpassword'>>>(error)) {
          const formError = error.response?.data.data
          if (formError) {
            Object.keys(formError).forEach((key) =>
              setError(key as keyof Omit<FormRegister, 'cpassword'>, {
                message: formError[key as keyof Omit<FormRegister, 'cpassword'>],
                type: 'Server'
              })
            )
          }
        }
      }
    })
  }

  return (
    <div className='flex items-center justify-center px-5 py-8 xl:min-h-[85vh] bg-primary'>
      <Helmet>
        <title>Đăng ký | Shopee Color</title>
        <meta name='description' content='Đăng ký tài khoản để đăng nhập vào dự án' />
      </Helmet>
      <form
        onSubmit={handleSubmit(handleSignUp)}
        className='flex flex-col w-full md:w-[60%] lg:w-[50%] xl:w-[40%] 2xl:w-[35%] min-h-full p-8 mx-auto bg-white rounded shadow-2xl'
      >
        <h2 className='mb-2 text-xl font-semibold text-secondary'>{t('nav header.register')}</h2>
        <Field>
          <Label htmlFor='email'>{t('login.email address')}</Label>
          <Input
            className='border-transparent'
            name='email'
            register={register}
            placeholder={t('login.placeholder email')}
            errorMessage={errors.email?.message}
          />
        </Field>
        <Field>
          <Label htmlFor='password'>{t('login.password')}</Label>
          <InputPassword
            className='border-transparent'
            name='password'
            register={register}
            placeholder={t('login.placeholder password')}
            errorMessage={errors.password?.message}
          />
        </Field>
        <Field>
          <Label htmlFor='cpassword'>{t('register.cpassword')}</Label>
          <InputPassword
            className='border-transparent'
            name='cpassword'
            register={register}
            placeholder={t('register.cpassword')}
            errorMessage={errors.cpassword?.message}
          />
        </Field>

        <Button type='submit' className='px-6 py-3 my-4' isLoading={registerMutation.isLoading}>
          {t('nav header.register')}
        </Button>

        <div className='text-center'>
          {t('register.new to')}?
          <Link to={path.LOGIN} className='ml-2 font-medium transition text-primary hover:text-third'>
            {t('nav header.login')}
          </Link>
        </div>
      </form>
    </div>
  )
}

export default RegisterPage
