import { textHomeHeader } from '~/constants/data'
import Header from './components/Header'
import Search from './components/Search'

const HomePage = () => {
  return (
    <div className='container flex flex-col w-full h-full gap-3'>
      <Search />
      <h1 className='text-primary text-[28px] font-bold'>{textHomeHeader.HOME_TITLE}</h1>
      <p className='text-gray-500'>{textHomeHeader.HOME_DESCRIPTION}</p>

      <div className='flex justify-center gap-5 py-5'>
        <Header />
      </div>
    </div>
  )
}

export default HomePage
