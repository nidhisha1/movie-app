import React from 'react';

const MovieList = (props) => {
	//const FavouriteComponent = props.favouriteComponent;

	return (
		<div>
			{props.movies.map((movie, index) => (
				<div className='image-container d-flex justify-content-start m-3' key={index}>
						{movie.title}
				</div>
			))}
		</div>
	);
};

export default MovieList;
