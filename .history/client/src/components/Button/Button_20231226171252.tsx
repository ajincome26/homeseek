import { ButtonHTMLAttributes } from 'react'
import { RotatingLines } from 'react-loader-spinner'
import { Link } from 'react-router-dom'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean
  to?: string
}

const Button = ({ type, children, isLoading, to, className, ...rest }: ButtonProps) => {
  if (to && typeof to === 'string') {
    return (
      <Link to={to || ''}>
        <button
          type={type || 'button'}
          disabled={isLoading}
          className={`${className} flex items-center justify-center font-medium text-white transition duration-300 ease-linear bg-third`}
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
      className={`${className} flex items-center justify-center font-medium text-white transition duration-300 ease-linear bg-auto rounded-md bg-gradient-to-br hover:opacity-90 from-third to-fourth hover:bg-gradient-to-tl focus:ring-4 focus:outline-none focus:ring-teal-300 text-base`}
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
