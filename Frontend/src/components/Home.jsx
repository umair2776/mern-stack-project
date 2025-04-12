import React from 'react'
import Carousel from './Carousel'
import Product from './Product'
import Products from './Products'
import Conditioner from './Conditioner'
import Conditioners from './Conditioners'
import Sunsilk from './Sunsilk'
import Sunsilks from './Sunsilks'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
      {/* <Carousel/> */}
      <Product/>
      <Products/>
      <Conditioner/>
      <Conditioners/>
      <Sunsilk/>
      <Sunsilks/>
      <Footer/>
    </div>
  )
}

export default Home
