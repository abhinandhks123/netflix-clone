import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import { API_KEY, imageUrl } from '../../constants/constants'

import "./Banner.css"
function Banner() {
  const [movie,setMovie] =useState()
  
  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      const randomIndex = Math.floor(Math.random() * response.data.results.length);

      console.log(response.data.results[randomIndex])
      setMovie(response.data.results[randomIndex]);
    })
  },[])
  return (
    

    <div 
    style={{backgroundImage:`url(${movie? imageUrl+movie.backdrop_path:""})`}}
    
    className='Banner'>
      <div className="content">
        <h1 className='title'>{movie ? movie.title:""}</h1>
        <h1 className='title'>{movie ? movie.name:""}</h1>

        
        <h1 className='discription'>{movie ? movie.overview:""}</h1>
        <h3 className='rating'>{movie ? movie.vote_average:""}/10 Ratings</h3>
        <div className="banner-buttons">
            <button className='button'>Play</button>
            <button className='button'>My list</button>

        </div>
      </div>
      <div className="fade">
        
      </div>
      
    </div>
      
  )
}

export default Banner
