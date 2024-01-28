interface Props {
  htmlFor: string
  children: string
  textColor?: string
  className?: string
}

const Label = ({ htmlFor, children, textColor, className }: Props) => {
  return (
    <label
      className={`${textColor || 'text-white'} mt-2 mb-3 font-semibold cursor-pointer ${className}`}
      htmlFor={htmlFor}
    >
      {children}
    </label>
  )
}

export default Label
