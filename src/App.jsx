import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import PostContainer from './Components/PostContainer/PostContainer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App md:container md:mx-auto">

         <Header></Header> 
         
         <PostContainer></PostContainer>

         <ToastContainer></ToastContainer>

         

    </div>
  )
}

export default App
