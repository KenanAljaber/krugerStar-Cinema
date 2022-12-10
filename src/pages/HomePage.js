
import Banner from "../components/Banner";
import MovieList from "../components/MovieList";
import "../styles/homePage.css"
import { connect } from "react-redux";
import Loading from "../components/Loading";
const HomePage = ({movies_reducer}) => {

    
    return (
        <div className="homePageContainer">
            
            <Banner title="Series Mix" slogan="Your home of entertaiment." />
            
            {
           movies_reducer.finished ? <MovieList movies={movies_reducer.searching? movies_reducer.filteredData : movies_reducer.data } />
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