import { useState } from 'react'
import Todo from './Todo'
import withAuthenticate from './components/withAuthenticate'
import { Button } from '@mui/material'

const TodoDisplaywithAuthenticate = withAuthenticate(Todo)

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleAction = () => {
    setIsLoggedIn(!isLoggedIn)
  }

  return (
    <>
    <TodoDisplaywithAuthenticate isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
    <Button onClick={handleAction} variant="contained" style={{margin: "20px auto"}}>{isLoggedIn ? 'Log out' : 'Log in'}</Button>
    </>
  )
}

export default App
