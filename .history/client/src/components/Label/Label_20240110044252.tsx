interface Props {
  htmlFor: string
  children: string
  className?: string
}

const Label = ({ htmlFor, children, className }: Props) => {
  return (
    <label className={`${className} mt-2 mb-3 font-semibold text-white cursor-pointer`} htmlFor={htmlFor}>
      {children}
    </label>
  )
}

export default Label
