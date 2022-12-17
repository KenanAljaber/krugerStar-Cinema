import "../styles/banner.css"
import Search from "./Search";
const Banner = ({title,slogan}) => {
  
    return ( 
        <div className="bannerContainer">
            <div className="title">{title}</div>
            <div className="slogan">{slogan}</div>
            <Search/>
            

        </div>
     );
}
 
export default Banner;