// import { render } from "react-dom";
import App from "./components/App";
import "./index.css";
import { createRoot } from "react-dom/client";
import {BrowserRouter , Routes , Route } from "react-router-dom";
import Movie from "./components/Movie";
import Favorite from "./components/Favorite";



const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
<BrowserRouter>
<Routes>
    <Route exact path="/" element={<App />}></Route>
    <Route exact path="/favorite" element={<Favorite />}></Route>
    <Route exact path="/movie/:movie_id" element={<Movie />}></Route>
</Routes>
</BrowserRouter>
);
