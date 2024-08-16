import { Wrapper, StarIcon, Rating, MaxRating, TotalVotes } from "./styled";

export const RatingBox = ({ $small, $detailed, mark, votes }) => (
  <Wrapper $detailed={$detailed}>
    <StarIcon hidden={$small} />
    <Rating>{mark}</Rating><MaxRating hidden={!$detailed}>/{" "}10</MaxRating>
    <TotalVotes hidden={$small} $detailed={$detailed}>
      {votes ? `${votes} vote${votes === 1 ? "" : "s"}` : "No votes yet"}
    </TotalVotes>
  </Wrapper>
);
