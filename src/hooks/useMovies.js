import { useEffect,useState } from "react";
import { FETCHED_MOVIES } from "../store/actions/actions";
import store from "../store/MovieStore";


const useMovies = () => {
    const [movies,setMovies]=useState();
   const api="https://api.tvmaze.com/shows";
 
  useEffect(()=>{
    loadBooks();
    console.log("called")
    
  },[])
    async function loadBooks(){
       
        
        const resp= await fetch(api);
        setTimeout(async ()=>{
           // console.log(store.getState());
                const data = await resp.json();
                const filterdData=filterApiData(data);
               store.dispatch({type:FETCHED_MOVIES,payload:filterdData});
                setMovies(filterdData);
              //  console.log(store.getState());
          

               
        },1500);
    }

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