import { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

const LoginPage = () => {
  const [params] = useSearchParams()
  const navigate = useNavigate()
  useEffect(() => {
    const access_token = params.get('access_token')
    const refresh_token = params.get('refresh_token')
    // Dựa vào new_user và verify để biết là user mới hay user cũ và đã verify email hay chưa !!!
    // const new_user = params.get('new_user') // có thể check thêm là 0 hay 1 để hiển thị thông báo gì đó (phân biệt login và register)
    // const verify = params.get('verify')
    localStorage.setItem('access_token', access_token as string)
    localStorage.setItem('refresh_token', refresh_token as string)
    navigate('/')
  }, [navigate, params])
  return <div>LoginPage</div>
}

export default LoginPage
