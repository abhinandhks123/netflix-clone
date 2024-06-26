import React,{useEffect,useState} from 'react'
import './RowPost.css'
import axios from '../../axios'
import { imageUrl } from '../../constants/constants'



function RowPost(props) {
  const [movies,setMovies]=useState([])
  const [selectedMovie, setSelectedMovie] = useState(null);
  useEffect(()=>{
    axios.get(props.url).then((response)=>{
      console.log(response.data)

      setMovies(response.data.results);

    })
  },[props.url])
  
  
  
  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };
 
  const handleCloseDetails = () => {
    setSelectedMovie(null);
  };

  return (
    <div className='row'>
      <h2 className='posters-h'>{props.title}</h2>
      <div className="posters" >
      
        {movies.map((obj)=>
        
         <img onClick={() => handleMovieClick(obj)}  className={props.isSmall? 'small-poster':'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="" />
       
        )}
         
         {selectedMovie && (
          
          <div className="popup">
          <div className="popup-content">
          <span className="close" onClick={handleCloseDetails}>
              &times;</span>
            <div className="left">
            <img className='popup-img' src={`${imageUrl+selectedMovie.backdrop_path}`} alt="" />

            </div>
            <div className="right">
            <h3>{selectedMovie.name}</h3>
            <h3>{selectedMovie.title}</h3>

            <p>{selectedMovie.overview}</p>
            <div className="btn-rate">
              <div className="rate">
                <h2>{selectedMovie.vote_average}/10<br/>Ratings</h2>
                <i class="fa-regular fa-heart"></i>

              </div>
              <div className="btns">
                <button className='btn' >My list</button>
                <button className='btn'>Play</button>
               
              </div>
            </div>
            
            

            </div>
            

          </div>
          </div>

         )}
    
      </div>
  
      
      
      
    </div>
    
  )
}

export default RowPost
