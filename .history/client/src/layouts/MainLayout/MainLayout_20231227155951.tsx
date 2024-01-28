import { Outlet } from 'react-router-dom'
import { Categories } from '~/components/Categories'
import Footer from '~/components/Footer/Footer'
import { MainHeader } from '~/components/MainHeader'

const MainLayout = () => {
  return (
    <>
      <MainHeader />
      <Categories />
      <Outlet />
      <Footer />
    </>
  )
}

export default MainLayout
