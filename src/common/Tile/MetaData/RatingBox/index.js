import { Wrapper, StarIcon, Rating, MaxRating, TotalVotes } from "./styled";

export const RatingBox = ({
  $small,
  $personDetailed,
  $detailed,
  $backdrop,
  mark,
  votes,
}) => {
  const shouldDisplay = !$small && !$personDetailed;

  return (
    shouldDisplay && (
      <Wrapper $detailed={$detailed} $backdrop={$backdrop}>
        <StarIcon $backdrop={$backdrop} hidden={!votes} />
        <Rating $backdrop={$backdrop} hidden={!votes}>
          {mark}
        </Rating>
        <MaxRating $backdrop={$backdrop} hidden={!$detailed}>
          / 10
        </MaxRating>
        <TotalVotes $backdrop={$backdrop} $detailed={$detailed}>
          {votes ? `${votes} vote${votes === 1 ? "" : "s"}` : "No votes yet"}
        </TotalVotes>
      </Wrapper>
    )
  );
};
