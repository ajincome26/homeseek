import { useState } from 'react'
import { Link } from 'react-router-dom'
import icons from '~/utils/icons'
import { Button } from '../Button'

const { BsSuitHeart, BsSuitHeartFill } = icons

const PostItem = () => {
  const images = [
    'https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/08/09/7cbb54269623547d0d3214_1660031441.jpg',
    'https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/08/09/4ce53e73fc763e28676716_1660031441.jpg',
    'https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/08/09/1afe41668363413d187213_1660031440.jpg',
    'https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/08/09/2d44a8da6adfa881f1ce11_1660031440.jpg'
  ]
  const [isHoverHeart, setIsHoverHeart] = useState(false)
  // const add = address.split(',')

  // const handleStar = (star: number) => {
  //   const stars = []
  //   for (let i = 1; i <= +star; i++) stars.push(<HiStar className='inline-block pb-[6px]' size={20} color='#fdc318' />)
  //   return stars
  // }

  return (
    <div className='relative flex w-full gap-2 pt-3 my-3 border-t border-t-red-600'>
      <Link to='' className='w-2/5 grid grid-cols-2 gap-[1px] relative cursor-pointer cr-hover-images'>
        <div className='w-[55px] h-[25px] text-sm font-light absolute bottom-2 left-2 text-white rounded-md bg-overlay-60 flex items-center justify-center'>
          {`${images.length} ảnh`}
        </div>
        {/* Chú ý cách 1 này: Mảng indexs (i = 0,1,2,3). Mảng images (index) tất cả ảnh lọc ra những ảnh có index === i (0,1,2,3)... Rồi map 4 ảnh tìm được và render ra */}
        {/* {images.length > 0 &&
          images
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .filter((i: any, index: number) => indexs.some((i) => i === index))
            ?.map((i: string | undefined, index: Key | null | undefined) => (
              <img key={index} src={i} alt='preview' className='object-cover w-full h-[127px]' />
            ))} */}
        {/* Có thể dùng cách 2 */}
        <img src={images[0]} alt='' className='object-cover w-full h-[127px]' />
        <img src={images[1]} alt='' className='object-cover w-full h-[127px]' />
        <img src={images[2]} alt='' className='object-cover w-full h-[127px]' />
        <img src={images[3]} alt='' className='object-cover w-full h-[127px]' />
        <span
          className='absolute z-10 transition-all cursor-pointer right-2 bottom-2'
          onMouseEnter={() => setIsHoverHeart(true)}
          onMouseLeave={() => setIsHoverHeart(false)}
        >
          {isHoverHeart ? <BsSuitHeartFill color='#f73859' size={24} /> : <BsSuitHeart color='white' size={24} />}
        </span>
      </Link>
      <div className='flex flex-col w-3/5'>
        <div className='font-semibold text-red-600 uppercase rounded-sm cursor-pointer cr-hover-text-red hover:bg-slate-300'>
          {/* <span className={`${star === 0 ? 'mr-0' : 'mr-2'}`}>
            {handleStar(+star).length > 0 &&
              handleStar(+star).map((star, number) => {
                return <span key={number}>{star}</span>
              })}
          </span>
          {title} */}
        </div>
        <div className='flex items-center justify-between my-[10px]'>
          <span className='font-semibold text-fourth basis-2/6'>151000</span>
          <span className='basis-1/6'>50</span>
          <span
            className='transition-all border border-transparent cursor-pointer hover:border-b-secondary cr-truncate-1'
            // title={`${add[add.length - 2]},${add[add.length - 1]}`}
          >
            515616
          </span>
          {/* <span className="text-fifth">Hôm nay</span> */}
        </div>
        <p className='font-normal text-fifth cr-truncate-4'>baskcnkasmc kasmclkmas âcscsa</p>
        <div className='flex items-center justify-between mt-auto'>
          <div className='flex items-center basis-1/2'>
            <div className='mr-2 overflow-hidden rounded-full'>
              <img src='https://i.imgur.com/SipxhNX.jpg' alt='' className='w-[30px] h-[30px] object-cover' />
            </div>
            <span className='font-semibold'>Cksncas</span>
          </div>
          <div className='flex items-center justify-end gap-2 basis-1/2'>
            <Button className='text-white bg-primary px-[10px] py-[3px]' hover>
              05236665862
            </Button>
            <Button className='text-primary border border-primary px-[10px] py-[3px]' hover>
              Nhắn Zalo
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostItem
