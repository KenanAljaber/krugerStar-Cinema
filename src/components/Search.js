import "../styles/search.css"
import close from "../assets/closeRed.png"
import { useState } from "react";
import {connect} from "react-redux";
import { cancelSearch, searchMovies } from "../store/actions/actions";



const Search = (props) => {
    const [searchValue,setSearchValue]=useState("");


    //aqui se cambia el estado searchValue cada vez que pasa un cambio en el search bar
    function handleOnchange(e){
        const data=e.target.value;
        setSearchValue(data);
        const filteredData= filterData(searchValue,props.movies_reducer.data);
        props.searchMovies(filteredData);

        
    }
    //al presionar la imagen de cancelar se pone el search bar vacio 
    function handleImgClick(){
       setSearchValue("");
        props.cancelSearch([]);
       
    }

    /**
     * este method busca entre los elementos del array para encontrar elementos que contienen en su nombre o generos el value
     * @param {es el valor de search bar } value 
     * @param {es el array de las peliculas } arr 
     * @returns  retorna una array con los elementos filtrados
     */
    function filterData(value,arr){
            const filteredData= arr.reduce((accum,actual)=>{
                if(actual.name.toLowerCase().includes(value) || actual.geners.toString().toLowerCase().includes(value)){
                    accum.push(actual);
                }
                return accum;
            },[])
            return filteredData;
    }
    return ( 
        <div className="searchContainer">
          
            <input className="search" type="text" placeholder="Type a movie name, movie type to search our movies "
             onChange={handleOnchange} value={searchValue}/>
             {searchValue.length>0 &&
                <img src={close}  className="closeImg" onClick={handleImgClick}/>
             }
            
        </div>     );
}
 const mapStateToProps=(state)=>{
    return {
        movies_reducer: state.movies_reducer
    }
 }
 const mapDispatcherToProps={
     
        searchMovies: searchMovies,
        cancelSearch: cancelSearch,
    
 }
export default connect(mapStateToProps,mapDispatcherToProps)(Search);