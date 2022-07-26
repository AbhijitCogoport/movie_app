import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import defult from "../defult.jpg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../node_modules/font-awesome/css/font-awesome.min.css";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearch] = useState("Iron");
  const [count, setCount] = useState(2);
  // const [error,setError]=useState('');

  const getMovies = async (movies_name, no) => {
    const repo = await axios.get(
      "https://www.omdbapi.com/?apikey=d7eda280&s=%27" +
        movies_name +
        "%27&page=" +
        no
    );
    console.log(repo.data.Response === "True");
    if (repo.data.Response === "True") {
      if(no >=2){
        let mov=movies;
       setMovies(mov.concat(repo.data.Search));
      }
      else{
      setMovies(repo.data.Search);
      console.log(repo.data.Search);
      }
    } else {
    }
  };
  useEffect(() => {
    getMovies(searchValue, 1);
  }, [searchValue]);

  return (
    <>
      <div className="search_form">
        <div className="search_div">
          <div>
            <Link to="/">
              <button className="web_icon active">OMBD Movies</button>
            </Link>
          </div>
          <div>
            <input
              type="text"
              value={searchValue}
              onChange={(e) => setSearch(e.target.value)}
            />
            <i className="fa fa-search"></i>
          </div>
          <div className="fevorite_link">
            <Link to="/favorite">
              <button className="favorite_text">Favourite</button>
            </Link>
          </div>
        </div>
      </div>
      {/* <div>Movies List</div> */}
      <div className="all_movies">
        {movies.map((mo, index) => {
         return(
          <div key={index} className="only_movie">
          <div className="poster_img">
            <Link to={"/movie/" + mo.imdbID}>
              <img
                src={(mo.Poster==="N/A") ? defult :mo.Poster }
                // mo.Poster
                alt="MOvie Poster"
                className="movie_poster"
              />
            </Link>
          </div>
          <h3>{mo.Title}</h3>
          <div>Type : {mo.Type}</div>
          <div>Year : {mo.Year}</div>
          <div className="details_btn"></div>
        </div>
         )
        })}
      </div>
      <div className="more_data">
        <button
          className="more_movies"
          onClick={(e) => {
            setCount(count + 1);
            getMovies(searchValue, count);
          }}
        >
          More Movies
        </button>
      </div>
      <div className="footer">
        <div className="footer_div">
          <div>OMBD Movies</div>
          <div>&copy; Abhijit Gayen</div>
        </div>
      </div>
    </>
  );
}
