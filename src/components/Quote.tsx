import Image from 'next/image'
import React from 'react'

const Quote = () => {
  return (
    <div className='bg-white lg:pt-20 lg:pb-20 pb-5 pt-5 '> {/* Separate top/bottom padding */}
    <img 
      src="/images/quote.png" 
      alt="quote" 
      className='w-full  mx-auto' 
     
    />
  </div>
  )
}

export default Quote