import { Link } from "react-router-dom";
import defult from "../defult.jpg";


export default function Favorite() {
  let set = JSON.parse(localStorage.getItem("favorite"));
  return (
    <>
      <div className="search_form">
        <div className="search_div">
          <div>
            <Link to="/">
              <button className="web_icon">OMBD Movies</button>
            </Link>
          </div>
          <div className="fevorite_link">
            <Link to="/favorite">
              <button className="favorite_text active">Favourite</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="all_movies">
        {console.log(set)}
        {set.map((mo, index) => {
          return (
            <div key={index} className="only_movie">
              <div className="poster_img">
                <Link to={"/movie/" + mo.imbdId}>
                  <img
                    src={(mo.Img==='N/A') ? defult : mo.Img}
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
          );
        })}
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
