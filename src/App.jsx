import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Content from './Components/Content/Content'
import Body from './Components/Forms/Body'
import Top from './Components/Top/Top'
import Footer from './Components/Footer/Footer'
import Carousel from './Components/Carousel/Carousel'
import Number from './Components/Number/Number'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Content/>
      <Carousel/>
      <Number/>
      <Body/>
      <Top/>
      <Footer/>
    </div>
  )
}

export default App