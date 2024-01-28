import { useRoutes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { LoginPage } from './pages/LoginPage'

const useRoute = () => {
  const element = useRoutes([
    {
      path: '/',
      element: <HomePage />
    },
    {
      path: '/login/oauth',
      element: <LoginPage />
    }
  ])
  return element
}

export default useRoute
