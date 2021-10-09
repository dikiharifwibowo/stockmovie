import React, { Component } from 'react';
import { BASE_URL, API_KEY } from '../../config';
import Spinner from '../elements/Spinner/Spinner';
import MovieInfo from '../elements/MovieInfo/MovieInfo';

class Movie extends Component {

    state = {
        movie: [],
        loadingMovies: false,
        directors: [],
        visible: 6
    }

    componentDidMount() {
        const { match } = this.props;

        this.setState({
            ...this.state,
            loadingMovies: true
        })

        let moviesEndPoint = `${BASE_URL}/?apikey=${API_KEY}&i=${match.params.movieId}`
        this.getMovieWithId(moviesEndPoint);
    }

    getMovieWithId = moviesEndPoint => {
        const { match } = this.props;
        fetch(moviesEndPoint)
            .then(response => response.json())
            .then((movie) => {
               // console.log("detail movie",movie);

                if (movie.overview !== "") {
                    this.setState({
                        movie : movie,
                        loadingMovies: false
                    })
                }
            })
    }

    loadMore = () => {
        this.setState({
            visible: this.state.visible + 6,
        })
    }

    render() {
       
        const { movie, loadingMovies, directors, visible } = this.state
        console.log("detail movie render", movie);
        const { location} = this.props
        return (
            <React.Fragment>
                {loadingMovies ? <Spinner /> :
                    (movie) ?
                        <MovieInfo
                            movieInfo={movie}
                            directors={directors}
                            searchWord={location.searchWord}
                            visible={visible}
                            loadMore={this.loadMore}
                            loading={(loadingMovies)}
                        /> : null
                }
            </React.Fragment>
        )
    }
}

export default Movie;

