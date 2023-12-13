import React from 'react'
import Hero from '../components/hero/Hero'
import Popular from '../components/popular/Popular'
import Offers from '../components/offers/Offers'
import NewCollections from '../components/newcollections/NewCollections'
import NewsLetter from '../components/newsletter/NewsLetter'
import Footer from '../components/footer/Footer'

const Shop = () => {
  return (
    <div>
      <Hero></Hero>
      <Popular></Popular>
      <Offers></Offers>
      <NewCollections></NewCollections>
      <NewsLetter></NewsLetter>
      {/* <Footer></Footer> */}
     
    </div>
  )
}

export default Shop