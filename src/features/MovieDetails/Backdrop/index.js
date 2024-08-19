import { getImageUrl } from "../../../common/api/getImageUrl";

import { MetaData } from "../../../common/Tile/MetaData";
import { Background, Poster } from "./styled";

export const Backdrop = ({ movie }) => (
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
