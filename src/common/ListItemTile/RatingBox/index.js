import { Wrapper, StarIcon, Rating, TotalVotes } from "./styled";

export const RatingBox = ({ $small, mark, votes }) => (
  <Wrapper>
    <StarIcon hidden={$small} />
    <Rating>{mark}</Rating>
    <TotalVotes hidden={$small}>
      {votes ? `${votes} vote${votes === 1 ? "" : "s"}` : "No votes yet"}
    </TotalVotes>
  </Wrapper>
);
