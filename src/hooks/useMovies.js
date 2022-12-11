import { useEffect,useState } from "react";
import { FETCHED_MOVIES } from "../store/actions/actions";
import store from "../store/MovieStore";
import axios from "axios"

const useMovies = () => {
    const [movies,setMovies]=useState();
   const api="https://api.tvmaze.com/shows";
 
   /*
   cuando el app se inicia se va a verficar si la data del api estan guardados en el local storage
    si es el caso se van a poner la data guardado en redux store
    sino se va a hacer fetch utilizando axios
   */
  useEffect(()=>{
    if(localStorage.getItem("movies")){
      store.dispatch({type:FETCHED_MOVIES,payload:JSON.parse(localStorage.getItem("movies"))});
    }else{
      loadBooks();
    }
    
  },[])
  /**
   * este method va a hacer fetch para la data del api utilizando axios y filtrarla segun nuestro uso
   * y guardarla en el local storage
   */
    async function loadBooks(){
       
        console.log("fetching api")
        await axios.get(api).then((resp)=>{
        
          const filterdData=filterApiData(resp.data);
          store.dispatch({type:FETCHED_MOVIES,payload:filterdData});
          setMovies(filterdData);
          localStorage.setItem("movies",JSON.stringify(filterdData));
        })
 
    }
/**
 * este method va a filtrar la data segun nuestro uso
 * @param {es la data del api} data 
 * @returns un array de movies filtrada solo con la informacion que necesitamos
 */
    function filterApiData(data){

            const arr=data.reduce((accum,actual)=>{
               
                const summary= actual.summary.substring(3,actual.summary.length-4).replace("</b>","").replace("<b>","");
                
                    const movie={
                        id: crypto.randomUUID(),
                        name : actual.name,
                        status: actual.status,
                        officialSite: actual.officialSite,
                        language: actual.language,
                        summary: summary,
                        endDate: actual.ended,
                        geners: actual.genres.toString(), // array 
                        images: actual.image, //array
                        rating:actual.rating.average
                    }
                    accum.push(movie);
                    return accum;
            },[]);

            return arr;
    }

  return movies;
}
 
export default useMovies;