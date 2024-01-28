import { useRoutes } from 'react-router-dom'
import { path } from './constants/path'
import { MainLayout } from './layouts/MainLayout'
import ManageLayout from './layouts/ManageLayout/ManageLayout'
import { CreatePost } from './pages/CreatePostPage'
import { HomePage } from './pages/HomePage'
import { LoginPage } from './pages/LoginPage'
import { RegisterPage } from './pages/RegisterPage'
import VerifyEmail from './pages/VerifyEmailPage/VerifyEmail'

const { HOME, LOGIN, REGISTER, OAUTH, CREATE, VERIFY_EMAIL } = path

const useRoute = () => {
  return useRoutes([
    {
      path: LOGIN,
      element: <LoginPage />
    },
    {
      path: REGISTER,
      element: <RegisterPage />
    },
    {
      path: OAUTH,
      element: <LoginPage />
    },
    {
      path: OAUTH,
      element: <RegisterPage />
    },
    {
      path: VERIFY_EMAIL,
      element: <VerifyEmail />
    },
    // Authen không ảnh hưởng
    {
      element: <ManageLayout />,
      children: [
        {
          index: true,
          path: CREATE,
          element: <CreatePost />
        }
      ]
    },
    {
      element: <MainLayout />,
      children: [
        {
          index: true,
          path: HOME,
          element: <HomePage />
        }
      ]
    }
  ])
}

export default useRoute
