import React, { Component } from 'react';
import { BASE_URL, API_KEY } from '../../config'
import ImageFrame from '../elements/ImageFrame/ImageFrame';
import Spinner from '../elements/Spinner/Spinner';
import LoadMoreBtn from '../elements/LoadMore/LoadMoreBtn'
import SearchBar from '../elements/SearchBar/SearchBar';
import { Row, Col, Container } from 'react-bootstrap';
import no_img from '../elements/img/no_image.jpg';
import PageTitle from '../elements/PageTitle/PageTitle';

class Home extends Component {

    state = {
        movies: [],
        currentPage: 1,
        totalPage: 0,
        loading: false, // Loading Effect
        searchWord: "",
    }

    componentDidMount() {
        const endPoint = `${BASE_URL}/?apikey=${API_KEY}&s=Batman&page=${this.state.currentPage}`;
        this.getRequest(endPoint);

        this.setState({
            loading: true
        })
    };

    searchMovies = searchWord => { // This function trigger the Get Request Function

        let endPoint = "";
        this.setState({
            movies: [],
            searchWord,
            loading: true,
            currentPage: 0,
        });

        if (this.state.searchWord === "") {
            endPoint = `${BASE_URL}/?apikey=${API_KEY}&s=Batman&page=${this.state.currentPage + 1}`;
        }
        else {
            endPoint = `${BASE_URL}/?apikey=${API_KEY}&s=${this.state.searchWord}&page=${this.state.currentPage + 1}`
        }

        this.getRequest(endPoint)
    }

    loadMoreMovies = () => {
        let endPoint = "";
        this.setState({
            loading: true,
        });
        if (this.state.searchWord === "") {
            console.log("current page", this.state.currentPage)
            endPoint = `${BASE_URL}/?apikey=${API_KEY}&s=Batman&page=${this.state.currentPage+1}`;
        }
        else {
            endPoint = `${BASE_URL}/?apikey=${API_KEY}&s=${this.state.searchWord}&page=${this.state.currentPage+1}`
        }
        this.setState({
            currentPage: this.state.currentPage+1,
        });
        this.getRequest(endPoint)
    }

    getRequest = (endPoint) => {
        fetch(endPoint)
            .then(response => response.json())
            .then(data => {
                if(data.Response === 'True') {
                    this.setState({
                        movies: [...this.state.movies, ...data.Search],
                        currentPage: this.state.currentPage,
                        totalPage: data.totalResults,
                        loading: false
                    })
                } else {
                    this.setState({
                        movies:[],
                        currentPage: 1,
                        totalPage: 0,
                        loading: false
                    })
                }
                
            })
    };

    render() {
        const { searchWord, movies, loading, currentPage, totalPage } = this.state
        //console.log("movie", movies)
        return (
            <>
                <SearchBar 
                callback={this.searchMovies} 
                placeHolder = "Cari Film Disini"
                />
                <Container>
                    <Row>
                        <Col sm = {6} className = "offset-sm-3 text-center">
                            {searchWord ? <h2 >Pencarian untuk {searchWord} </h2> : <PageTitle  title = "Film Kamu"/> }
                        </Col>
                        
                        <Col sm = {6} className = "offset-sm-3 text-center">
                            {movies.length == 0 ? <h2 >Not Found</h2> : ''}
                        </Col>
                    </Row>
                    <Row>
                        {
                            movies.map((movie) => {
                                return <ImageFrame
                                    key={movie.imdbID}
                                    image={movie.Poster != 'N/A' ? `${movie.Poster}` : `${no_img}`}
                                    clickable={true}
                                    movieId={movie.imdbID}
                                    movieName={movie.Title}
                                    searchWord = {searchWord}
                                />
                            })
                        }
                    </Row>
                </Container>
                {loading ? <Spinner /> : null}
                {(currentPage <= totalPage && !loading ) ?
                    <LoadMoreBtn loadMoreMovies={this.loadMoreMovies} text="Halaman Selanjutnya" currentPage={currentPage} /> : null
                }
            </>
        )
    }
}

export default Home;