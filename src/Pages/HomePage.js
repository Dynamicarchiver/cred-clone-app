import React from 'react'
import HeroSection from '../components/HeroSection'
import Header from '../components/common/Header';
import ProductShowcase from '../components/ProductShowcase';

const Homepage = () => {
  return (
    <div>
    <Header />
      <HeroSection />
      <ProductShowcase />
    </div>
  )
}

export default Homepage;
