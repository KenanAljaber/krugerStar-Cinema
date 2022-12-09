
import Banner from "../components/Banner";
import MovieList from "../components/MovieList";
import useMovies from "../hooks/useMovies";
import "../styles/homePage.css"
import { connect } from "react-redux";
import { fetched_movies } from "../store/actions/actions";
import { useEffect } from "react";
const HomePage = (props) => {
   useMovies();
    
    return (
        <div className="homePageContainer">
            <Banner title="Series Mix" slogan="Your home of entertaiment." />
            {
           props.movies_reducer.finished ? <MovieList movies={props.movies_reducer.filteredData.length>0? props.movies_reducer.filteredData : props.movies_reducer.data } />
                    :
                    <h1 style={{ color: "white" }}>Loading</h1>

            }


        </div>
    );

}
const mapStateToProps = (state)=>{
    return {
        movies_reducer: state.movies_reducer
    }
}


export default connect(mapStateToProps)(HomePage);