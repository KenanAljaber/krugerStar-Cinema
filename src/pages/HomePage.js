
import Banner from "../components/Banner";
import MovieList from "../components/MovieList";
import useMovies from "../hooks/useMovies";
import "../styles/homePage.css"
import { connect } from "react-redux";
import Loading from "../components/Loading";
const HomePage = (props) => {
   useMovies();
    
    return (
        <div className="homePageContainer">
            
            <Banner title="Series Mix" slogan="Your home of entertaiment." />
            
            {
           props.movies_reducer.finished ? <MovieList movies={props.movies_reducer.filteredData.length>0? props.movies_reducer.filteredData : props.movies_reducer.data } />
                    :
                    <Loading/>

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