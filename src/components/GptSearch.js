import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BG_URL } from '../utils/constants'

const GptSearch = () => {
  return (
    <>
    <div className="fixed -z-10">
        <img className='h-screen w-full object-cover md:h-full md:w-full'
          src={BG_URL}
          alt="background"
        />
      </div>
    <div className=''>
        
        <GptSearchBar/>
        <GptMovieSuggestion/>
    </div>
    </>
  )
}

export default GptSearch