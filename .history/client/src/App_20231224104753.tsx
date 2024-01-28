import useRoute from './useRoute'

function App() {
  const routeElements = useRoute()
  return (
    <>
      <div>{routeElements}</div>
    </>
  )
}

export default App
