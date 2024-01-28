import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useLocation } from 'react-router-dom'
import { path } from '~/constants/path'
import { resetPasswordSchema, ResetPasswordSchema } from '~/utils/schema'

export type FormResetPassword = ResetPasswordSchema

export default function ResetPassword() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<FormResetPassword>({
    resolver: yupResolver(resetPasswordSchema)
  })

  const handleResetPassword = (data: FormResetPassword) => {
    console.log('handleResetPassword ~ data:', data)
  }

  const location = useLocation()
  console.log(location.state)
  return (
    <form onSubmit={handleSubmit(handleResetPassword)} className='bg-gray-50 dark:bg-gray-900'>
      <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
        <a href={path.HOME} className='flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white'>
          Home Seek
        </a>
        <div className='w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8'>
          <h2 className='mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
            Reset Password
          </h2>
          <form className='mt-4 space-y-4 lg:mt-5 md:space-y-5'>
            <div>
              <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>New Password</label>
              <input
                // {...register('password')}
                type='password'
                name='password'
                id='password'
                placeholder='••••••••'
                className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              />
            </div>
            <div>
              <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Confirm password</label>
              <input
                // {...register('confirm_password')}
                type='confirm-password'
                name='confirm-password'
                id='confirm-password'
                placeholder='••••••••'
                className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              />
            </div>
            <div className='flex items-start'>
              <div className='flex items-center h-5'>
                <input
                  id='newsletter'
                  aria-describedby='newsletter'
                  type='checkbox'
                  className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800'
                />
              </div>
              <div className='ml-3 text-sm'>
                <label htmlFor='newsletter' className='font-light text-gray-500 cursor-pointer dark:text-gray-300'>
                  I accept the Terms and Conditions
                </label>
              </div>
            </div>
            <button
              type='submit'
              className='w-full text-white bg-[#2563eb] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
            >
              Reset password
            </button>
          </form>
        </div>
      </div>
    </form>
  )
}
