import "../styles/movie.css"
const Movie = ({movie}) => {
    return ( 
        <div className="movieCard">
          
            <img src={movie.cover} className="movieImg"/>
            <div className="movieName">{movie.name}</div>
        </div>
     );
}
 
export default Movie;