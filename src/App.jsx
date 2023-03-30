import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import PostContainer from './Components/PostContainer/PostContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App md:container md:mx-auto">

         <Header></Header> 
         
         <PostContainer></PostContainer>

    </div>
  )
}

export default App
