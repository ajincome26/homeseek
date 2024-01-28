import { useEffect, useState } from 'react'
import axios from 'axios'
import { useQueryParams } from '~/hooks/useQueryParams'

export default function VerifyEmail() {
  const [message, setMessage] = useState()
  const { token } = useQueryParams()
  useEffect(() => {
    const controller = new AbortController()

    if (token) {
      axios
        .post(
          '/users/verify-email', // URL xác thực email bên API Server
          { email_verify_token: token },
          {
            baseURL: import.meta.env.VITE_API_URL,
            signal: controller.signal
          }
        )
        .then((res) => {
          setMessage(res.data.message)
          if (res.data.result) {
            const { refresh_token, access_token } = res.data.result
            localStorage.setItem('accessToken', access_token)
            localStorage.setItem('refreshToken', refresh_token)
          }
        })
        .catch((err) => {
          setMessage(err.response.data.message)
        })
    }
    return () => {
      controller.abort()
    }
  }, [token])
  return (
    <div className='min-h-screen px-4 py-2 text-lg font-bold text-white bg-slate-200'>
      <div className='rounded-md w-60 h-60 bg-primary'>{message}</div>
    </div>
  )
}
