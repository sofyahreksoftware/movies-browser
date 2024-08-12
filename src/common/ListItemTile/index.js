import { Wrapper, Poster } from "./styled";
import { MetaData } from "./MetaData";
import { ReactComponent as PlaceholderIcon } from "../../assets/placeholderActorIcon.svg";

export const ListItemTile = ({
  poster,
  title,
  role,
  year,
  genres,
  mark,
  votes,
  $small,
}) => {
  
  const $noImage = !poster || poster === "https://image.tmdb.org/t/p/w342/null";

  return (
    <>
      <Wrapper $small={$small}>
        <Poster
          url={!$noImage ? poster : ""}
          $noImage={$noImage}
          $small={$small}
        >
          {$noImage && <PlaceholderIcon />}
        </Poster>

        <MetaData
          title={title}
          role={role}
          year={year}
          genres={genres}
          mark={mark}
          votes={votes}
          $small={$small}
        />
      </Wrapper>
    </>
  );
};
