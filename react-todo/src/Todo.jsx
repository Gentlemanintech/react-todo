import Header from './components/Header'
import TodoInput from './components/Footer'
import TodoDisplay from './components/TodoDisplay'
import withAuthenticate from './components/withAuthenticate'
import { useState } from 'react'

const TodoDisplaywithAuthenticate = withAuthenticate(TodoDisplay)

const Todo = ({isLoggedIn,setIsLoggedIn}) => {
 const [groupName, setGroupName] = useState('');

  return (
    <>
    <header>
      <Header setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn}/>
    </header>
    <main>
    <TodoDisplay groupName={groupName} isLoggedIn={isLoggedIn}/>
    </main>
    <footer>
    <TodoInput groupName={groupName} setGroupName={setGroupName}/> 
    </footer>
    </>
  )
}

export default Todo
