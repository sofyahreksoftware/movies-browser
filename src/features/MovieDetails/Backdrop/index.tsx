import { getImageUrl } from "../../../common/api/getImageUrl";

import { MetaData } from "../../../common/bothPageTypes/Tile/MetaData";
import { Movie } from "../../../common/bothPageTypes/moviePersonTypes";
import { Background, Poster } from "./styled";

interface BackDropProps {
  movie: Movie;
}

export const Backdrop = ({ movie }: BackDropProps) =>
  movie?.backdrop_path && (
    <>
      <Background />
      <Poster
        backdrop={getImageUrl({
          size: "/w1280",
          path: `${movie?.backdrop_path}`,
        })}
      >
        <MetaData
          $detailed
          $backdrop
          title={movie?.original_title}
          mark={movie.vote_average}
          votes={movie.vote_average}
        />
      </Poster>
    </>
  );
