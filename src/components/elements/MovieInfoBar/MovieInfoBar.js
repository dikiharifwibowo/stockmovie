import React from 'react';
import './MovieInfoBar.css';

const MovieInfoBar = ({ imdbVotes, imdbRating, Country }) => {
    console.log(imdbVotes, imdbRating, Country)
    return (
        <div className="pt-3 d-flex justify-content-around align-items-center text-center movie-bar">
            <div>
                <i className="fas fa-money-bill-alt fa-3x mb-2"></i>
                <h5>IMDB Rating : <span>{imdbRating}</span> </h5>
            </div>
            <div>
                <i className="fas fa-money-bill-alt fa-3x mb-2"></i>
                <h5>IMDB Votes : <span>{imdbVotes}</span> </h5>
            </div>
            <div>
                <i className="fas fa-money-bill-alt fa-3x mb-2"></i>
                <h5>Negara : <span>{Country}</span> </h5>
            </div>
        </div>
    )
}


export default MovieInfoBar;
