import { NavLink } from 'react-router-dom'
import { categories } from '~/constants/data'
import { path } from '~/constants/path'

const notActive = 'hover:bg-secondary px-4 h-full flex items-center bg-primary transition-all ease-linear duration-300'
const active = 'hover:bg-secondary px-4 h-full flex items-center bg-secondary'
const Navigation = () => {
  return (
    <div className='w-full text-white h-[40px] bg-primary flex justify-center items-center'>
      <div className='container flex items-center h-full'>
        <NavLink to={'/'} className={({ isActive }) => (isActive ? active : notActive)}>
          Trang chủ
        </NavLink>
        {categories?.length > 0 &&
          categories.map((item, index) => {
            return (
              <div key={index} className='h-full'>
                <NavLink
                  to={`${path.POSTS}?category=${item.name}`}
                  className={({ isActive }) => (isActive ? active : notActive)}
                >
                  {item.name}
                </NavLink>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Navigation
