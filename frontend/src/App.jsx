import { useState } from 'react'
import Header from './components/HomePage/Header'
import Banner from './components/HomePage/Banner'
import Review from './components/HomePage/Review'
import Footer from './components/HomePage/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Header/>
  <Banner/>
  <Review/>
  <Footer/>

       
    </>
  )
}

export default App
