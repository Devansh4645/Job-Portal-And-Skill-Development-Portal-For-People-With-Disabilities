import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="heading">
      <h2>We Are Here To Assist You</h2>     
      <h2 className='h2'>  Tell Us About Yourself</h2>
      
      </div>
      <div className='details'>
      <h3 className='h3'>I Am </h3>
      <input type="text" id="Enter_Name" name="Name" className="placeholder" placeholder='Enter Your Name'></input>
      <h3 className='h4'>And I Have A Special Condition Which Is</h3>
      <div className="dropdown">
  <button className="dropbtn">My Disability</button>
  <div className="dropdown-content">
    <a href="#">Autism</a>
    <a href="#">ADHD</a>
    <a href="#">Dyslexia</a>
   
  </div>
</div>

      </div>
      
    </>
  )
}

export default App
