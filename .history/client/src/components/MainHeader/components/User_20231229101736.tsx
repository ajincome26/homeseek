const User = () => {
  return (
    <div className='flex items-center justify-center gap-2 mr-10 cursor-pointer'>
      <div className='w-[45px] h-[45px] rounded-full overflow-hidden border-[2px] border-secondary'>
        <img
          src='https://images.unsplash.com/photo-1678815927938-0fb01822962c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
          alt='avatar'
          className='object-cover object-top w-full h-full'
        />
      </div>
      <div>
        <span className='text-[17px] font-semibold text-secondary'>Criss</span>
        <div className='flex items-center gap-2'>
          <span className='font-medium text-secondary'>
            {`Mã tài khoản: `}
            <span className='font-semibold'>ajsbcjsabcuas1235</span>
          </span>
          <span className='mr-2 font-medium text-secondary'>
            {`Tài khoản chính: `}
            <span className='font-semibold'>1000$</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default User
