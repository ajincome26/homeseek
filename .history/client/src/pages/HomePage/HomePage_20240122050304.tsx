import Header from './components/Header'
import Search from './components/Search'

const HomePage = () => {
  return (
    <div className='container'>
      <Search />
      <h1 className='text-secondary text-[28px] font-bold'>{text.HOME_TITLE}</h1>
      <p className='text-gray-500'>{text.HOME_DESCRIPTION}</p>

      <div className='flex justify-center gap-5 py-5'>
        <Header />
      </div>
    </div>
  )
}

export default HomePage