import { Link } from "react-router-dom";
import "../styles/movie.css"
const Movie = ({movie}) => {
    return ( 
        <div className="movieCard">
           <div className="movieName">{movie.name}</div>
            <img src={movie.images.original} className="movieImg" alt={movie.name}/>
            <Link to={`/movie/:${movie.id}`}> <button className="cardBtn" >Details</button></Link>

        </div>
     );
}
 
export default Movie;