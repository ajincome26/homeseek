import { useRoutes } from 'react-router-dom'
import { path } from './constants/path'
import { MainLayout } from './layouts/MainLayout'
import { HomePage } from './pages/HomePage'
import { LoginPage } from './pages/LoginPage'
import { RegisterPage } from './pages/RegisterPage'

const { HOME, LOGIN, REGISTER, OAUTH } = path

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
    // Authen không ảnh hưởng
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
