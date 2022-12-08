import "../styles/movie.css"
const Movie = ({movie}) => {
    return ( 
        <div className="movieCard">
           <div className="movieName">{movie.name}</div>
            <img src={movie.cover} className="movieImg"/>
           
            <button className="cardBtn">Details</button>

        </div>
     );
}
 
export default Movie;