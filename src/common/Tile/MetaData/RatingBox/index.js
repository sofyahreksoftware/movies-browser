import { Wrapper, StarIcon, Rating, MaxRating, TotalVotes } from "./styled";

export const RatingBox = ({ $small, $detailed, mark, votes }) => (
  <Wrapper $detailed={$detailed}>
    <StarIcon hidden={$small || !votes} />
    <Rating hidden={!votes}>{mark}</Rating>
    <MaxRating hidden={!$detailed}>/ 10</MaxRating>
    <TotalVotes hidden={$small} $detailed={$detailed}>
      {votes ? `${votes} vote${votes === 1 ? "" : "s"}` : "No votes yet"}
    </TotalVotes>
  </Wrapper>
);
