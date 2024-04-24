import React from 'react'
import Hero from '../components/Hero/hero'
import Popular from '../components/popular/popular'
import Offers from '../components/offers/offer'
import Newcollection from "../components/newcollections/Newcollection"
import Newsletter from "../components/newsletter/newsletter"

const shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <Newcollection />
      <Newsletter/>
    </div>
  )
}

export default shop
