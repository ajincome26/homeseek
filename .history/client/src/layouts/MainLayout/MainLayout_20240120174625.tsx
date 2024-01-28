import { Outlet } from 'react-router-dom'
import Footer from '~/components/Footer/Footer'
import { Intro } from '~/components/Intro'
import { MainHeader } from '~/components/MainHeader'
import { Navigation } from '~/components/Navigation'

const MainLayout = () => {
  return (
    <>
      <MainHeader />
      <Navigation />
      <Outlet />
      <Intro />
      <div className='pb-7'>
        <Footer />
      </div>
    </>
  )
}

export default MainLayout
