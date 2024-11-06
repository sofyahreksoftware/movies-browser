import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { fetchGenres, clearOnLeave } from "../common/genres/genresSlice";
import { selectGenres } from "../common/genres/genresSlice";

import {
  toMovieList,
  toMovieDetails,
  toPeopleList,
  toPersonDetails,
  catchAllPath,
} from "./routes";
import { Navigation } from "../features/Navigation";
import { MovieList } from "../features/MovieList";
import { PeopleList } from "../features/PeopleList";
import { PersonDetails } from "../features/PersonDetails";
import { MovieDetails } from "../features/MovieDetails";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGenres());

    return () => {
      dispatch(clearOnLeave());
    };
  }, [dispatch]);

  const genreList = useSelector(selectGenres);

  return (
    <HashRouter>
      <Navigation />
      <Routes>
        <Route path={toMovieDetails()} element={<MovieDetails />} />
        <Route
          path={toPersonDetails()}
          element={<PersonDetails genres={genreList} />}
        />
        <Route
          path={toMovieList()}
          element={<MovieList genres={genreList} />}
        />
        <Route path={toPeopleList()} element={<PeopleList />} />

        <Route path={catchAllPath()} element={<Navigate to="/movies" />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
