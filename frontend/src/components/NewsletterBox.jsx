import React from 'react'

const NewsletterBox = () => {
  return (
    <div className='text-center'>

      <p className='text-2xl font-medium text-gray-800'>Join Trendora & Enjoy 20% Off!</p>
      <p className='text-gray-400 mt-3'>Sign up today and unlock exclusive savings on your first purchase. Shop the latest trends with ease!</p>

      <form className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input className='w-full sm:flex-1 outline-none' type="text" placeholder='Enter your email id' required />
        <button className='bg-black text-white text-xs px-10 py-4' type='submit'>SUBSCRIBE</button>
      </form>

    </div>
  )
}

export default NewsletterBox
