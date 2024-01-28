import { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useAuth } from '~/contexts/auth.context'
import { User } from '~/types/user.type'
import { setAccessToken, setRefreshToken, setUserInfoToStorage } from '~/utils/auth'

const HomePage = () => {
  const { setIsLoggedIn, setUserInfo } = useAuth()
  const navigate = useNavigate()
  const [params] = useSearchParams()
  const access_token = params.get('access_token')
  const refresh_token = params.get('refresh_token')
  const email = params.get('email') as string
  const name = params.get('name') as string
  const phone_number = params.get('phone_number') as string
  // Dựa vào new_user và verify để biết là user mới hay user cũ và đã verify email hay chưa !!!
  const new_user = params.get('new_user') // có thể check thêm là 0 hay 1 để hiển thị thông báo gì đó (phân biệt login và register)
  useEffect(() => {
    if (access_token && refresh_token) {
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
  }, [access_token, email, name, navigate, new_user, phone_number, refresh_token, setIsLoggedIn, setUserInfo])
  return <div className='container'>Home Page</div>
}

export default HomePage
