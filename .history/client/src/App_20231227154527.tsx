import useRoute from './useRoute'

function App() {
  const routeElements = useRoute()
  return (
    <div className='bg-third'>
      <div>{routeElements}</div>
    </div>
  )
}

export default App
