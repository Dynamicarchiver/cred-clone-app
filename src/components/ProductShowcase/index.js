import React, { useEffect, useRef, useState } from 'react'
import './productShowcase.css'

const ProductShowcase = () => {
  const [showAnimation, setShowAnimation] = useState(false)

  const ref = useRef(null)

  const toggleAnimation = (e) => {
    if(e[0].isIntersecting){
      setShowAnimation(true)
    }
   
  }
  const options = {
    root: null,
    rootMargin: "0px", 
    threshold: 0.5
  }

  useEffect(() => {
    const observer = new IntersectionObserver(toggleAnimation, options)

    if(!showAnimation) {
      if(ref.current) {
        observer.observe(ref.current)
      }
    }
    return () => {
      if(ref.current) {
        observer.unobserve(ref.current)
      }
    }
  })
  
  return (
    <div className={`product-showcase ${showAnimation} : scale-in-bottom : '`}
    ref={ref}>
      {showAnimation && <div className='product-showcase-wrapper'>
       <img src='https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-left-1.png' className='showcase-ui showcase-mockup-1' alt='showcase-mockup1'/>
       <img src='https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-left-2.png' className='showcase-ui showcase-mockup-2' alt='showcase-mockup1'/>
       <img src='https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-center.png' className='showcase-ui showcase-mockup-3' alt='showcase-mockup1'/>
       <img src='https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-right-1.png' className='showcase-ui showcase-mockup-4' alt='showcase-mockup1'/>
       <img src='https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-right-2.png' className='showcase-ui showcase-mockup-5' alt='showcase-mockup1'/>

       </div>}
    </div>
  )
}

export default ProductShowcase
