import { Wrapper, StarIcon, Rating, MaxRating, TotalVotes } from "./styled";

export const RatingBox = ({ $small, $personDetailed, $detailed, mark, votes }) =>
  !$small || $personDetailed && (
    <Wrapper $detailed={$detailed}>
      <StarIcon hidden={!votes} />
      <Rating hidden={!votes}>{mark}</Rating>
      <MaxRating hidden={!$detailed}>/ 10</MaxRating>
      <TotalVotes $detailed={$detailed}>
        {votes ? `${votes} vote${votes === 1 ? "" : "s"}` : "No votes yet"}
      </TotalVotes>
    </Wrapper>
  );
