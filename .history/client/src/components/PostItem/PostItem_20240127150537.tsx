import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Post } from '~/types/post.type'
import icons from '~/utils/icons'
import { handleStar } from '~/utils/utils'
import { Button } from '../Button'

const { BsSuitHeart, BsSuitHeartFill } = icons

export interface PostItemProps {
  post: Post
}

const PostItem = ({ post }: PostItemProps) => {
  const [isHoverHeart, setIsHoverHeart] = useState(false)

  return (
    <div className='relative flex w-full gap-2 pt-3 my-3 border-t border-t-red-600'>
      <Link to='' className='w-2/5 grid grid-cols-2 gap-[1px] relative cursor-pointer cr-hover-images'>
        <div className='w-[55px] h-[25px] text-sm font-light absolute bottom-2 left-2 text-white rounded-md bg-overlay-60 flex items-center justify-center'>
          {`${post.medias.length} ảnh`}
        </div>
        {post.medias.length > 0 &&
          post.medias
            .slice(0, 4)
            .map((item) => <img key={item} src={item} alt='preview' className='object-cover w-full h-[127px]' />)}
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
          <span className='flex items-center h-6 transition cursor-pointer lg:gap-2 hover:opacity-80'>
            {handleStar(5).length > 0 &&
              handleStar(5).map((star, number) => {
                return <span key={number}>{star}</span>
              })}
          </span>
          {post.title}
        </div>
        <div className='flex items-center justify-between my-[10px]'>
          <span className='font-semibold text-sixth basis-2/6'>{post.price}</span>
          <span className='basis-1/6'>{post.acreage}</span>
          <span
            className='transition-all border border-transparent cursor-pointer hover:border-b-secondary cr-truncate-1'
            // title={`${add[add.length - 2]},${add[add.length - 1]}`}
          >
            {post.address}
          </span>
        </div>
        <p className='font-normal text-fifth cr-truncate-4'>{post.description}</p>
        <div className='flex items-center justify-between mt-5'>
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
