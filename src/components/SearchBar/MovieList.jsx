import React from 'react';

const MovieList = (props) => {

    const FavouriteComponent = props.favouriteComponent;

    return (
        <>
        {
            props.movies.map((movie, index) => 
            <div className="image-container d-flex justify-content m-3">
                <img src={movie.Poster} alt={movie.Title}></img>
                <div onClick={() => props.handleFavourites(movie)} className="overlay d-flex align-items-center justify-content-center">
                    <FavouriteComponent />
                </div>
            </div>
            )
        }
        </>
    )
}

export default MovieList;