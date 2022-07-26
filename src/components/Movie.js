import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import defult from "../defult.jpg";


export default function Movie() {
  let { movie_id } = useParams();

  let set = JSON.parse(localStorage.getItem("favorite"));
  // console.log(set)
  const movie_present = (movie_id) => {
    var present = false;
    if(set!== null){
    set.map((item) => {
      if (item.imbdId === movie_id) {
        present = true;
      }
      return 0;
    });}
    return present;
  };
  const Add_to_favorite_list = () => {
    if (!movie_present(movie_id)) {
     let x=[];
      if(set !== null){
       x = [
        ...set,
        {
          imbdId: movie_id,
          Title: movie.Title,
          Year: movie.Year,
          Img: movie.Poster,
          Type: movie.Type,
        },
      ];}
      else{
        x = [
          {
            imbdId: movie_id,
            Title: movie.Title,
            Year: movie.Year,
            Img: movie.Poster,
            Type: movie.Type,
          },
        ];
      }
      localStorage.setItem("favorite", JSON.stringify(x));
    }
  };
  const [movie, setMovie] = useState([]);
  const getMovies = async (movie_id) => {
    const repo = await axios.get(
      "https://www.omdbapi.com/?apikey=d7eda280&i=" + movie_id
    );
    setMovie(repo.data);
  };
  useEffect(() => {
    getMovies(movie_id);
  }, [movie_id]);
  if (!movie_present(movie_id)) {
    return (
      <>
        <div className="all_details">
          <div className="head_main_title">
            <div>
              <h1>{movie.Title}</h1>
              <div className="after_title">
                <div>{movie.Runtime}</div>
                <div> || </div>
                <div>{movie.Released}</div>
              </div>
            </div>
            <div className="all_rating">
              <div>Imbd Rating :{movie.imdbRating}</div>
              <div>Imdb Vote : {movie.imdbVotes}</div>
            </div>
          </div>
          <div className="movie_body">
            <div>
              
              <img src={(movie.Poster==='N/A') ? defult : movie.Poster} alt="Movie_poster" />
            </div>
            <div className="all_other">
              <div>
                <label>Actors : </label> {movie.Actors}
              </div>
              <div>
                <label>Award : </label> {movie.Awards}
              </div>
              <div>
                <label>Country : </label> {movie.Country}
              </div>
              <div>
                <label>Director : </label> {movie.Director}
              </div>
              <div>
                <label>Genre : </label> {movie.Genre}
              </div>
              <div>
                <label>Language : </label> {movie.Language}
              </div>
              <div>
                <label>Writer : </label> {movie.Writer}
              </div>
              <div>
                <label>Story : </label> {movie.Plot}
              </div>

              <div className="like_movies">
                <Link to={"/movie/" + movie_id}>
                  <button
                    onClick={(e) => {
                      Add_to_favorite_list();
                    }}
                  >
                    Add In Favourite List
                  </button>
                </Link>
              </div>
              <Link to="/" className="go_to_home_page">
                <button>Go To Home Page</button>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className="all_details">
        <div className="head_main_title">
          <div>
            <h1>{movie.Title}</h1>
            <div className="after_title">
              <div>{movie.Runtime}</div>
              <div> || </div>
              <div>{movie.Released}</div>
            </div>
          </div>
          <div className="all_rating">
            <div>Imbd Rating :{movie.imdbRating}</div>
            <div>Imdb Vote : {movie.imdbVotes}</div>
          </div>
        </div>
        <div className="movie_body">
          <div>
            <img src={(movie.Poster==='N/A') ? defult : movie.Poster} alt="Movie_poster" />
          </div>
          <div className="all_other">
            <div>
              <label>Actors : </label> {movie.Actors}
            </div>
            <div>
              <label>Award : </label> {movie.Awards}
            </div>
            <div>
              <label>Country : </label> {movie.Country}
            </div>
            <div>
              <label>Director : </label> {movie.Director}
            </div>
            <div>
              <label>Genre : </label> {movie.Genre}
            </div>
            <div>
              <label>Language : </label> {movie.Language}
            </div>
            <div>
              <label>Writer : </label> {movie.Writer}
            </div>
            <div>
              <label>Story : </label> {movie.Plot}
            </div>
            <div className="like_movies">
                <Link to="/favorite">
                  <button>
                    Go To Favourite List
                  </button>
                </Link>
              </div>
            <Link to="/" className="go_to_home_page">
              <button>Go To Home Page</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
