import React from 'react';

const MovieListHeading = (props) => {
	return (
		<div className='col headingColor'>
			<h3>{props.heading}</h3>
		</div>
	);
};

export default MovieListHeading;
