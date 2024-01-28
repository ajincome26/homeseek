interface Props {
  htmlFor: string
  children: string
  textColor?: string
}

const Label = ({ htmlFor, children, textColor }: Props) => {
  return (
    <label className={`${textColor || 'text-white'} mt-2 mb-3 font-semibold cursor-pointer`} htmlFor={htmlFor}>
      {children}
    </label>
  )
}

export default Label
