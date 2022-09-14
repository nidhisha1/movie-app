import React from 'react';
import { useSelector } from 'react-redux';

const LastMovie = (props) => {
	const loading = useSelector((state) => state.loading);

	return (
		<div>
			{!loading &&
				<div className='image-container d-flex justify-content-start m-3'>
					{props.lastMovie.title} / {props.lastMovie.releaseDate}
					{console.log(props)}
				</div>
			}

		</div>
	);
};

export default LastMovie;
