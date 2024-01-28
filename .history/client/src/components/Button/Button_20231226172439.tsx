import { ButtonHTMLAttributes } from 'react'
import { RotatingLines } from 'react-loader-spinner'
import { Link } from 'react-router-dom'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean
  to?: string
  hover?: boolean
}

const Button = ({ type, children, isLoading, to, className, hover, ...rest }: ButtonProps) => {
  if (to && typeof to === 'string') {
    return (
      <Link to={to || ''}>
        <button
          type={type || 'button'}
          disabled={isLoading}
          className={`${className} flex items-center justify-center font-medium text-white transition duration-300 ease-linear bg-secondary rounded-md ${
            hover &&
            'relative after:absolute after:top-0 after:left-0 after:w-full after:h-full hover:after:bg-[#000] hover:after:bg-opacity-10 after:transition-all after:ease-linear after:duration-300'
          }`}
          {...rest}
        >
          {isLoading ? (
            <RotatingLines strokeColor='white' strokeWidth='5' animationDuration='0.5' width='25' visible={true} />
          ) : (
            children
          )}
        </button>
      </Link>
    )
  }
  return (
    <button
      type={type || 'button'}
      disabled={isLoading}
      className={`${className} flex items-center justify-center font-medium text-white transition duration-300 ease-linear bg-secondary rounded-md ${
        hover &&
        'relative after:absolute after:top-0 after:left-0 after:w-full after:h-full hover:after:bg-[#000] hover:after:bg-opacity-20 after:transition-all after:ease-linear after:duration-300'
      }`}
      {...rest}
    >
      {isLoading ? (
        <RotatingLines strokeColor='white' strokeWidth='5' animationDuration='0.5' width='24' visible={true} />
      ) : (
        children
      )}
    </button>
  )
}

export default Button
