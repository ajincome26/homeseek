import React from 'react'

const Intro = () => {
  return (
    <div className='border border-[#ccc] w-[75%] bg-white mt-7 p-8 text-center text-secondary rounded-md shadow-md'>
      <h2 className='text-lg font-bold'>{text.title}</h2>
      <p className='my-3 font-medium'>
        {text.desc1}
        <span className='text-link'>
          {categories.length > 0 &&
            categories.map((item, index) => (
              <span key={index}>
                <span className='text-[#f14666] hover:text-pink-700 transition-all duration-200 ease-linear'>
                  <Link to={formatVietnameseToString(item.value)}>{`${item.value.toLowerCase()}`}</Link>
                </span>
                <span>, </span>
              </span>
            ))}
        </span>
        {text.desc2}
      </p>
      <div className='flex items-center justify-around'>
        {text.statistic.map((item, index) => (
          <div key={index} className='flex flex-col gap-0'>
            <span className='text-xl font-bold'>{item.value}</span>
            <span className='font-medium'>{item.name}</span>
          </div>
        ))}
      </div>
      <h2 className='mt-5 mb-1 text-lg font-bold'>{text.message}</h2>
      <div className='flex items-center justify-center mb-3'>
        {stars.map((item) => (
          <span key={item}>
            <HiStar color='#fdc318' size={25} />
          </span>
        ))}
      </div>
      <div>
        <p className='mt-3 mb-1 italic'>{`"${text.comment}"`}</p>
        <span className='relative mb-5 font-medium'>
          {text.author}
          <span className='w-[50px] h-[1.5px] bg-secondary rounded-md absolute left-[-15%] top-1/2'></span>
          <span className='w-[50px] h-[1.5px] bg-secondary rounded-md absolute right-[-15%] top-1/2'></span>
        </span>
      </div>
      <h2 className='mt-5 text-lg font-bold'>{text.question}</h2>
      <div className='flex justify-center mt-5'>
        <Button
          text='Đăng tin ngay'
          textColor='text-white'
          bgColor='bg-sixth'
          padding='px-5 py-2'
          // onClick={() => {
          //   goLogin(false);
          // }}
          hover
        />
      </div>
    </div>
  )
}

export default Intro
