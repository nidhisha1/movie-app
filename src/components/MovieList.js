import React from 'react';

const MovieList = (props) => {
	//const FavouriteComponent = props.favouriteComponent;

	return (
		<>
			{props.movies.map((movie, index) => (
				<div className='movie-container d-flex align-items-center justify-content-center m-3' key={index}>
					<div className='m-8'>	
						<h5 className='title'>{movie.title}</h5>
						<div className='movie-details'>
							<div>Directed By: {movie.director}</div>
							<div>Release Date: {movie.release_date}</div>
						</div>
					</div>				
				</div>
			))}
		</>
	);
};

export default MovieList;
