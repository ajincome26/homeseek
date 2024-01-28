import { Outlet } from 'react-router-dom'
import Footer from '~/components/Footer/Footer'
import { MainHeader } from '~/components/MainHeader'
import { Navigation } from '~/components/Navigation'

const MainLayout = () => {
  return (
    <>
      <MainHeader />
      <Navigation />
      <Outlet />
      <Footer />
    </>
  )
}

export default MainLayout
