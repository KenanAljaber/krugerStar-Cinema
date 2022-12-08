import "../styles/search.css"
import close from "../assets/closeRed.png"
import { useState } from "react";

const Search = () => {
    const [searchValue,setSearchValue]=useState("");
    function handleOnchange(e){
        const data=e.target.value;
        setSearchValue(data);
        
    }

    function handleImgClick(){
        setSearchValue("");
    }
    return ( 
        <div className="searchContainer">
          
            <input className="search" type="text" placeholder="Type a movie name, movie type or country to search our movies "
             onChange={handleOnchange} value={searchValue}/>
             {searchValue.length>0 &&
                <img src={close}  className="closeImg" onClick={handleImgClick}/>
             }
            
        </div>     );
}
 
export default Search;