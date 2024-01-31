import React from 'react'
import { Hero } from '../../components/hero/hero'
import ProductContainer from '../../components/product-container/productcontainer'
import { BannerContainer } from '../../components/bannercontainer/banner-container'

export const Home = () => {
  return (
    <>
        <Hero/>
        <div className="container">
        <div className="box">
          <BannerContainer/>
        </div>
        </div>
        <ProductContainer/>
    </>
  )
}
