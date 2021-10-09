import React from "react";
import { Row, Col, Container, ProgressBar } from "react-bootstrap";
import BreadCrumbs from "../BreadCrumb/BreadCrumbs";
import './MovieInfo.css';
import no_img_bg from '../img/bg-not-found.jpg';
import MovieInfoBar from "../MovieInfoBar/MovieInfoBar";
import Proptypes from 'prop-types';


const MovieInfo = ({ movieInfo, searchWord }) => {

    console.log(movieInfo.imdbVotes)
    return (
        <Container fluid = "xs">
            <Row>
                <Col sm = {12} >
                    <BreadCrumbs 
                    title = {movieInfo.Title} 
                    searchWord = {searchWord}  
                    movieId = {movieInfo.imdbID}              
                    />
                </Col>
            </Row>

            <Row
                className = "p-5 justify-content-md-center text-light movieInfoContainer "
            >
                <Col xs= {12} md={12} lg= {4} className = "pr-0 pl-0 animated fadeInLeftBig">
                    {
                        movieInfo.Poster ? 
                        <img 
                        src = {`${movieInfo.Poster}`}
                        alt = "movieImg"
                        className = "img-fluid d-block m-auto" />
                        : 
                        <img 
                        src = {`${no_img_bg}`}
                        alt = "movieImg"
                        className = "img-fluid"
                        /> 
                    }
                </Col>
                <Col xs= {12} md={12} lg ={5} className="movieInfo p-4 animated fadeInRightBig">
                    
                    <p className = "movie-title" > {movieInfo.Title} </p>
                    <h5 className = "mb-4 text-warning">Tanggal Rilis : <span className = "text-light">{movieInfo.Released}</span></h5>
                    <h5 className = "text-warning">Deskripsi</h5>
                    <p>{movieInfo.Plot} </p>
                    <ProgressBar label={`IMDB: ${movieInfo.imdbRating}`} animated now = {`${movieInfo.imdbRating}`} min={0} max={10} />
                    <div className = "text-warning mt-3 h5">Type Movie : { movieInfo.Type }
                 
                     <div>Genre : { movieInfo.Genre } </div>

                    </div>

                    <h5 className ="mt-3 text-warning">Direktor:  <span className = "text-light">{movieInfo.Director} </span> </h5>
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <MovieInfoBar 
                    imdbRating = {movieInfo.imdbRating}
                    imdbVotes = {movieInfo.imdbVotes}
                    Country = {movieInfo.Country}
                    />
                </Col>
            </Row>
          
        </Container>
    );
};

MovieInfo.propTypes = {
    searchWord : Proptypes.string
}

export default MovieInfo;


