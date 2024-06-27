import { useState, useEffect} from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import HeaderMain from './HeaderMain';
import Footer from './Footer';
function App() {

  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false)
    }, 1000)
  })

  if(isLoading){
    return(
      <div className='loadingscreen'>VISIO</div>
    )
  }
  if(isLoading === false){
      return(
        <>
          <HeaderMain></HeaderMain>
          <Outlet></Outlet>
          <Footer></Footer>
        </>
       )
  }
}

export default App


