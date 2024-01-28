import { useEffect } from 'react'
import { useAuth } from './contexts/auth.context'
import useRoute from './useRoute'
import { LocalStorageEventTarget } from './utils/auth'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const routeElements = useRoute()
  const { resetAuth } = useAuth()
  useEffect(() => {
    LocalStorageEventTarget.addEventListener('clearLS', () => {
      resetAuth()
    })
    return () => {
      LocalStorageEventTarget.removeEventListener('clearLS', () => {
        resetAuth()
      })
    }
  }, [resetAuth])
  return (
    <div className='bg-third'>
      <ToastContainer />
      <div>{routeElements}</div>
    </div>
  )
}

export default App
