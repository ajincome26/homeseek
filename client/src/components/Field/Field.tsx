interface Props {
  children: JSX.Element | JSX.Element[]
}

const Field = ({ children }: Props) => {
  return <div className='flex flex-col items-start'>{children}</div>
}

export default Field
