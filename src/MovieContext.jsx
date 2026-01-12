import {createContext, useState} from 'react';


export const MovieContext = createContext(null);

export const MovieProvider = (props) =>{
    const [favoritemovies, setFavoriteMovies] = useState([]);
    return (
   <MovieContext.Provider value={{favoritemovies , setFavoriteMovies}}>
    {props.children}
   </MovieContext.Provider>
    )
}
