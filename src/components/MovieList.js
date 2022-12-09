import { useEffect, useState } from "react";
import "../styles/movieList.css"
import Movie from "./Movie";
import { connect } from "react-redux";
import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory";
const MovieList = ({movies}) => {
    const[start,setStart]=useState(0);
    const[end,setEnd]=useState(15);


    //en este method solo actualizo los estados start y end cada vez que se presiona el boton next
    function handleNext(){
        if((end+15)>movies.length && end!=movies.length-1){
            setEnd(movies.length-1);
            setStart((end-15));
            console.log("bigger")
        }else if(end==movies.length-1){
            console.log("equal")
            setEnd(15);
            setStart(0);
        }else{
            setStart((start+15));
            setEnd((end+15));
        }
       
       console.log(start,end,movies.length);
    }

    //en este method solo actualizo los estados start y end cada vez que se presiona el boton back
    function handleBack(){
        console.log(start,end,movies.length)
        if(start>=15 && end>=30){
            setStart((start-15));
            setEnd((end-15));
        }else{
            setStart(0);
            setEnd(15);
        }
    }
    return (
        <div>
        <div className="grid">
            {
                movies.slice(start,end).map(it => {
                    return <Movie movie={it} key={it.id} />
                })
            }
            
        </div>
        <div className="nextBtnContainer">
            {
            movies.length>15 &&
          <div>
        <button onClick={handleBack}>Back</button>
        <button onClick={handleNext}>Next</button>
        </div> 
    }
        
        </div>
        </div>
    );
}

const mapStatesToProps=(state)=>{
    return{
        moviesReducer: state.movies_reducer
    }
}

export default connect(mapStatesToProps)(MovieList);