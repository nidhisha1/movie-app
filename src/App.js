import React, { useState, useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import LastMovie from './components/LastMovie';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import { getUserDetails, getMovieDetails } from './actions/userAsyncActions';

const App = () => {
	const [movies, setMovies] = useState([]);
	const [searchValue, setSearchValue] = useState('');
	const [lastMovie, setLastMovie] = useState({});
	const userDetails = useSelector((state) => state.user);
	const movieDetails = useSelector((state) => state.movie);
	const loading = useSelector((state) => state.loading);

	const dispatch = useDispatch()

	useEffect(() => {
		setMovies([]);
		dispatch(getUserDetails(searchValue));
	}, [searchValue, dispatch]);

	useEffect(() => {
		setMovies([]);
		userDetails && userDetails.films.forEach(result => {
			dispatch(getMovieDetails(result));
		})
	}, [userDetails,dispatch])

	useEffect(() => {
		if(movieDetails) {
			setMovies(prevState => ([...prevState, { title: movieDetails.title, release_date: movieDetails.release_date, director: movieDetails.director }]));
		}
	}, [movieDetails,dispatch])


	useEffect(() => {
		const getLastMovie = (movies) => {
			var lastReleaseDate = movies[0] && movies[0].release_date;
			var title = movies[0] && movies[0].title;
			movies.forEach((movie) => {
				if (movie && movie.release_date > lastReleaseDate) {
					lastReleaseDate = movie.release_date;
					title = movie.title;

				}
			})
			setLastMovie({ 'releaseDate': lastReleaseDate, 'title': title })
		};
		getLastMovie(movies);
	}, [movies])

	return (
		<div className='container-fluid movie-app'>
			<div className='row d-flex align-items-center mt-4 mb-4'>
				<MovieListHeading heading='Movies' />
				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
			</div>
			{loading && <h2>Loading...</h2>}
			<div className='row'>
				<MovieList
					movies={movies}

				/>
			</div>
			{searchValue &&
				(
					<Fragment>
						<div className='row d-flex align-items-center mt-4 mb-4'>
							<MovieListHeading heading='Last Movie/Year Of Release' />
						</div>
						<div className='row'>
							<LastMovie
								lastMovie={lastMovie}
							/>
						</div>

					</Fragment>

				)
			}


		</div>
	);
};

export default App;
