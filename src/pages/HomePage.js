import Banner from "../components/Banner";
import MovieList from "../components/MovieList";

import "../styles/homePage.css"
const HomePage = () => {
    return ( 
        <div className="homePageContainer">
            <Banner title="Movies Mix" slogan="Your home of movies."/>
            <MovieList/>
            
        </div>
     );
}
 
export default HomePage;