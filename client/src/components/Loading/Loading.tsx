import { ThreeCircles } from 'react-loader-spinner'

const Loading = () => {
  return (
    <ThreeCircles
      height='80'
      width='80'
      color='#4ade80'
      wrapperStyle={{}}
      wrapperClass=''
      visible={true}
      ariaLabel='three-circles-rotating'
      outerCircleColor=''
      innerCircleColor=''
      middleCircleColor=''
    />
  )
}

export default Loading
