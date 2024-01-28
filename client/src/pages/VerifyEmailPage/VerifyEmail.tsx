import { useEffect, useState } from 'react'
import axios from 'axios'
import { useQueryParams } from '~/hooks/useQueryParams'

export default function VerifyEmail() {
  const [message, setMessage] = useState()
  const { token } = useQueryParams()
  useEffect(() => {
    // Research: Abort Axios
    const controller = new AbortController() // Dùng để cancel lần gọi api thứ 2 trở đi (nếu có)

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
    <div className='flex items-center justify-center min-h-screen px-4 py-2 text-2xl font-bold text-white bg-slate-200'>
      <div className='flex items-center justify-center w-1/2 rounded-md h-60 bg-primary'>{message}</div>
    </div>
  )
}
