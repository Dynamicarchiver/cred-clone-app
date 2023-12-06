import React from 'react'
import HeroSection from '../components/HeroSection'
import Header from '../components/common/Header';
import ProductShowcase from '../components/ProductShowcase';
import FeelSpecial from '../components/FeelSpecial';
import CardExperience from '../components/CardExperience';
import CredSecurity from '../components/CredSecurity';
import BrandLove from '../components/BrandLove';
import WindowPeak from '../components/WindowPeak';
import MobleScroll from '../components/MobileScroll';
import CredStory from '../components/CredStory';
import AppRating from '../components/AppRating';
import Footer from '../components/common/Footer';

const Homepage = () => {
  return (
    <div>
    <Header />
      <HeroSection />
      <ProductShowcase />
      <FeelSpecial />
      <BrandLove />
      <CardExperience />
      <MobleScroll />
      <div className='non-mobile'>
      <WindowPeak />
      </div>
     
      <CredSecurity />
      <CredStory />
      <AppRating />
      <Footer/>
    </div>
  )
}

export default Homepage;
