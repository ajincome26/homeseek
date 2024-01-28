import { useState } from 'react'
import { Link } from 'react-router-dom'
import { v4 } from 'uuid'
import { PostWithUser } from '~/types/post.type'
import icons from '~/utils/icons'
import { defaultURL, handleDotPrice } from '~/utils/utils'
import { Button } from '../Button'

const { BsSuitHeart, BsSuitHeartFill, FcVip } = icons

export interface PostItemProps {
  postWithUser: PostWithUser
}

const PostItem = ({ postWithUser }: PostItemProps) => {
  const { post, user } = postWithUser
  const [isHoverHeart, setIsHoverHeart] = useState(false)
  return (
    <div className='relative flex w-full gap-2 pt-3 my-3 border-t border-t-red-600'>
      <Link to='' className='w-2/5 grid grid-cols-2 grid-rows-2 gap-[1px] relative cursor-pointer cr-hover-images'>
        <div className='absolute'>
          {post.isVip && (
            <div className='flex items-center justify-center w-12 text-yellow-500 h-7 bg-overlay-30'>VIP</div>
          )}
        </div>
        <div className='w-[55px] h-[25px] text-sm font-light absolute bottom-2 left-2 text-white rounded-md bg-overlay-60 flex items-center justify-center'>
          {`${post.medias.length} ảnh`}
        </div>
        {post.medias.length >= 4
          ? post.medias
              .slice(0, 4)
              .map((item) => <img key={item} src={item} alt='preview' className='object-cover w-full h-[127px]' />)
          : post.medias.map((item) => (
              <img key={item} src={item} alt='preview' className='object-cover w-full h-[127px]' />
            ))}
        {post.medias.length < 4 &&
          Array(4 - post.medias.length)
            .fill(0)
            .map(() => <div className='bg-slate-200 h-[127px]' key={v4()}></div>)}
        <span
          className='absolute z-10 transition-all cursor-pointer right-2 bottom-2'
          onMouseEnter={() => setIsHoverHeart(true)}
          onMouseLeave={() => setIsHoverHeart(false)}
        >
          {isHoverHeart ? <BsSuitHeartFill color='#f73859' size={24} /> : <BsSuitHeart color='white' size={24} />}
        </span>
      </Link>
      <div className='flex flex-col w-3/5'>
        <div
          className={`font-semibold ${
            post.isVip ? 'text-red-600' : 'text-blue-800'
          } uppercase rounded-sm cursor-pointer cr-hover-text-red hover:bg-slate-300`}
        >
          {post.title}
        </div>
        <div className='flex items-center justify-between my-[10px]'>
          <span className='font-semibold text-primary basis-2/6'>{`${handleDotPrice(post.price as number)} VND`}</span>
          <span className='basis-1/6'>{post.acreage} m2</span>
          <span
            className='transition-all border border-transparent cursor-pointer hover:border-b-fourth cr-truncate-1'
            title={post.address}
          >
            {`${post.address?.split(', ')[post.address?.split(', ').length - 2]}, ${post.address?.split(', ')[
              post.address?.split(', ').length - 1
            ]}`}
          </span>
        </div>
        <p className='font-normal text-fifth cr-truncate-4'>{post.description}</p>
        <div className='flex items-center justify-between mt-auto'>
          <div className='flex items-center basis-1/2'>
            <div className='mr-2 overflow-hidden rounded-full shrink-0'>
              <img src={user[0].avatar || defaultURL} alt='' className='w-[30px] h-[30px] object-cover' />
            </div>
            <span className='font-semibold'>{user[0].username?.slice(0, 20)}</span>
          </div>
          <div className='flex items-center justify-end gap-2 basis-1/2'>
            <Button className='text-white bg-primary px-[10px] py-[3px]' hover>
              {user[0].phone_number}
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
