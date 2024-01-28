import logo from '../../assets/logo.png'

const MainHeader = () => {
  return (
    <div className='w-3/4'>
      <div className='flex items-center justify-between w-full py-3 mx-auto'>
        {' '}
        <Link to={'/'}>
          <img src={logo} alt='logo' className='w-[240px] h-[50px] object-contain' />
        </Link>
      </div>
    </div>
  )
}

export default MainHeader
