// {
//     type: 'ADD_MOVIES',
//     movies: [m1, m2, m3]
    
// }

//action types
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_TO_FAVOURITE = 'ADD_TO_FAVOURITE';
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES';
export const SET_SHOW_FAVOURITES = 'SET_SHOW_FAVOURITES';
export const ADD_SEARCH_RESULT = 'ADD_SEARCH_RESULT';
export const ADD_MOVIE_TO_LIST = 'ADD_MOVIE_TO_LIST';


//action creators
export function addMovies (movies) {
    return {
        type: ADD_MOVIES,
        movies
    }
}

export function addFavourite (movie){
    return {
        type: ADD_TO_FAVOURITE,
        movie
    }
}

export function removeFavourite (movie){
    return {
        type: REMOVE_FROM_FAVOURITES,
        movie
    }
}

export function setShowFavourites (val){
    return {
        type: SET_SHOW_FAVOURITES,
        val
    }
}

export function handleMovieSearch(movie){
    const url = `http://www.omdbapi.com/?apikey=eaf6796b&t=${movie}`;

        return function(dispatch){

        fetch(url)
        .then(response => response.json())
        .then(movie => {
            console.log(movie);

            //dispatch an action
            //dispatch: ({type: ,movie})
            dispatch(addMovieSearchResult(movie));
        })
    }
}

export function addMovieToList (movie){
    return {
        type: ADD_MOVIE_TO_LIST,
        movie
    }
}

export function addMovieSearchResult (movie){
    return {
        type: ADD_SEARCH_RESULT,
        movie
    }
}

