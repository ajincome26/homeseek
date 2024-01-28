import { useQuery } from '@tanstack/react-query'
import classNames from 'classnames'
import { omit } from 'lodash'
import { useEffect } from 'react'
import { createSearchParams, useNavigate } from 'react-router-dom'
import postApi from '~/apis/post.api'
import { Button } from '~/components/Button'
import { PostItem } from '~/components/PostItem'
import { path } from '~/constants/path'
import { order as orderConst, sortBy } from '~/constants/post'
import useQueryConfig from '~/hooks/useQueryConfig'
import { PostListParams } from '~/types/post.type'
import icons from '~/utils/icons'

const { PiCaretDownBold } = icons

const List = () => {
  const navigate = useNavigate()
  const queryParamsConfig = useQueryConfig()
  const postsQuery = useQuery({
    queryKey: ['posts', queryParamsConfig],
    queryFn: () => postApi.getPosts(queryParamsConfig as PostListParams)
  })

  // const page = Number(queryParamsConfig.page)
  const { sort_by = sortBy.DEFAULT, orderPrice = '', orderAcreage = '' } = queryParamsConfig
  // check active
  const isActiveSortBy = (sortByValue: Exclude<PostListParams['sort_by'], undefined>) => {
    return sortByValue === sort_by
  }
  const handleNavigateSortBy = (sortByValue: Exclude<PostListParams['sort_by'], undefined>) => {
    return navigate({
      pathname: path.HOME,
      search: createSearchParams(
        omit(
          {
            ...queryParamsConfig,
            sort_by: sortByValue
          },
          'order'
        )
      ).toString()
    })
  }
  const handleNavigatePrice = (orderValue: Exclude<PostListParams['orderPrice'], undefined>) => {
    return navigate({
      pathname: path.HOME,
      search: createSearchParams({
        ...queryParamsConfig,
        sort_by: sortBy.PRICE,
        order: orderValue
      }).toString()
    })
  }
  const handleNavigateAcreage = (orderValue: Exclude<PostListParams['orderAcreage'], undefined>) => {
    return navigate({
      pathname: path.HOME,
      search: createSearchParams({
        ...queryParamsConfig,
        sort_by: sortBy.ACREAGE,
        order: orderValue
      }).toString()
    })
  }

  // Scroll Top when paginate
  useEffect(() => {
    window.scrollTo({ behavior: 'smooth', top: 0 })
  }, [postsQuery.data])

  // Xử lý lỗi khi truy cập với page > pageSize
  useEffect(() => {
    if (postsQuery.data?.data.result.length === 0) {
      navigate({
        pathname: path.HOME,
        search: createSearchParams({
          ...queryParamsConfig,
          page: '1'
        }).toString()
      })
    }
  }, [navigate, postsQuery.data?.data.result, queryParamsConfig])
  if (!postsQuery.data) return <></>
  const posts = postsQuery.data.data.result

  return (
    <div className='border border-[#ccc] p-3 text-primary rounded-md shadow-md'>
      <div className='flex items-center justify-between'>
        <h1 className='mb-3 text-lg font-bold'>Danh sách tin đăng</h1>
        <span>Cập nhật : 05:41 27/01/2024</span>
      </div>
      <div className='flex items-center gap-3 mt-3'>
        <span>Sắp xếp:</span>
        <Button
          className={classNames('w-28 h-8 px-4 py-1 rounded-md hover:bg-opacity-80', {
            'bg-fourth text-white': isActiveSortBy('default'),
            'bg-slate-400': !isActiveSortBy('default')
          })}
          onClick={() => handleNavigateSortBy('default')}
          hover
        >
          Mặc định
        </Button>
        <Button
          className={classNames('w-28 h-8 px-4 py-1 rounded-md hover:bg-opacity-80', {
            'bg-fourth text-white': isActiveSortBy('createdAt'),
            'bg-slate-400': !isActiveSortBy('createdAt')
          })}
          onClick={() => handleNavigateSortBy('createdAt')}
          hover
        >
          Mới nhất
        </Button>
        <div className='relative'>
          <select
            className={classNames(
              'flex items-center justify-between w-48 h-8 px-4 py-1 rounded-md outline-none cursor-pointer hover:bg-opacity-80',
              { 'bg-primary text-white': isActiveSortBy('price'), 'bg-slate-400': !isActiveSortBy('price') }
            )}
            value={orderPrice}
            onChange={(e) => handleNavigatePrice(e.target.value as Exclude<PostListParams['orderPrice'], undefined>)}
          >
            <option value='' className='bg-white text-primary' disabled>
              Giá
            </option>
            <option value={orderConst.ASC} className='bg-white text-primary'>
              Thấp đến cao
            </option>
            <option value={orderConst.DESC} className='bg-white text-primary'>
              Cao đến thấp
            </option>
          </select>
          <div className='absolute top-1/2 right-4 translate-y-[-50%] cursor-pointer'>
            <PiCaretDownBold color={orderPrice === '' ? '' : 'white'} />
          </div>
        </div>
        <div className='relative'>
          <select
            className={classNames(
              'flex items-center justify-between w-48 h-8 px-4 py-1 rounded-md outline-none cursor-pointer hover:bg-opacity-80',
              { 'bg-primary text-white': isActiveSortBy('acreage'), 'bg-slate-400': !isActiveSortBy('acreage') }
            )}
            value={orderAcreage}
            onChange={(e) =>
              handleNavigateAcreage(e.target.value as Exclude<PostListParams['orderAcreage'], undefined>)
            }
          >
            <option value='' className='bg-white text-primary' disabled>
              Diện tích
            </option>
            <option value={orderConst.ASC} className='bg-white text-primary'>
              Thấp đến cao
            </option>
            <option value={orderConst.DESC} className='bg-white text-primary'>
              Cao đến thấp
            </option>
          </select>
          <div className='absolute top-1/2 right-4 translate-y-[-50%] cursor-pointer'>
            <PiCaretDownBold color={orderAcreage === '' ? '' : 'white'} />
          </div>
        </div>
      </div>
      <div className='posts'>
        {posts.map((item) => (
          <PostItem key={item.post._id} postWithUser={item} />
        ))}
      </div>
    </div>
  )
}

export default List
