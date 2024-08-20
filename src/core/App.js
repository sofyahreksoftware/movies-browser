import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import {
  toMovieList,
  toMovieDetails,
  toPeopleList,
  toPersonDetails,
  catchAllPath,
} from "./routes";
import { Navigation } from "../Navigation";
import { MovieList } from "../features/MovieList";
import { PeopleList } from "../features/PeopleList";
import { PersonDetails } from "../features/PersonDetails";
import { MovieDetails } from "../features/MovieDetails";

const App = () => {
  return (
    <>
      <HashRouter>
        <Navigation />
        <Routes>
          <Route path={toMovieDetails()} element={<MovieDetails />} />
          <Route path={toPersonDetails()} element={<PersonDetails />} />
          <Route path={toMovieList()} element={<MovieList />} />
          <Route path={toPeopleList()} element={<PeopleList />} />

          <Route path={catchAllPath()} element={<Navigate to="/movies" />} />
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;
