import "../styles/movie.css"
const Movie = ({movie}) => {
    return ( 
        <div className="movieCard">
           <div className="movieName">{movie.name}</div>
            <img src={movie.images.original} className="movieImg" alt={movie.name}/>
            <button className="cardBtn">Details</button>

        </div>
     );
}
 
export default Movie;