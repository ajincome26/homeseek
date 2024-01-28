import { memo } from 'react'
import { Link } from 'react-router-dom'
import { createSearchParams, useLocation, useNavigate } from 'react-router-dom'
import { path } from '~/constants/path'
import { SearchItemType } from '~/types/other.type'
import icons from '~/utils/icons'

export interface SidebarItemProps {
  title: string
  content: SearchItemType[]
  col?: boolean
  squareMeter?: boolean
  type: string
}

const { FiChevronRight } = icons
const SidebarItem = ({ title, content, col, type }: SidebarItemProps) => {
  const location = useLocation()
  const navigate = useNavigate()

  const handleFilterPosts = (code: string) => {
    navigate({
      pathname: location?.pathname,
      search: createSearchParams({
        [type]: code
      }).toString()
    })
  }

  return (
    <div className='border border-[#ccc] p-3 rounded-md shadow-md text-primary'>
      <h2 className='mb-3 text-lg font-bold'>{title}</h2>
      <div className={`${col ? 'grid grid-cols-2 gap-3' : 'flex flex-col gap-3'}`}>
        {/* Categories */}
        {!col &&
          content.map((item) => {
            return (
              <Link
                to={`${path.POSTS}?category=${item.name}`}
                key={item.code}
                className={`flex items-center gap-2 pb-2 border-b border-dashed border-[#ccc] ${
                  col ? '' : 'last-of-type:last:border-none'
                }`}
              >
                <FiChevronRight color='#747b88' />
                <p className={`cursor-pointer font-medium cr-hover-text relative`}>{item.name}</p>
              </Link>
            )
          })}

        {/* Price and Area */}
        {col &&
          content?.length > 0 &&
          content.map((item) => {
            return (
              <div
                onClick={() => handleFilterPosts(item.code)}
                key={item.code}
                className={`flex items-center gap-2 pb-2 border-b border-dashed border-[#ccc] ${
                  col ? '' : 'last-of-type:last:border-none'
                }`}
              >
                <FiChevronRight color='#747b88' />
                <p className={`cursor-pointer font-medium cr-hover-text relative`}>{item.name}</p>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default memo(SidebarItem)
