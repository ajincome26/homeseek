import { Outlet } from 'react-router-dom'
import Footer from '~/components/Footer/Footer'
import { MainHeader } from '~/components/MainHeader'

const MainLayout = () => {
  return (
    <>
      <MainHeader />
      <Outlet />
      <Footer />
    </>
  )
}

export default MainLayout
