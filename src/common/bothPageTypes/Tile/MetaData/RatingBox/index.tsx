import { Wrapper, StarIcon, Rating, MaxRating, TotalVotes } from "./styled";

import {
  SmallProp,
  DetailedProp,
  PersonDetailedProp,
  BackdropProp,
} from "../../styledTypes";

interface VotesProp {
  votes: number;
}

interface MarkProp {
  mark?: number;
}

type RatingBoxProps = SmallProp &
  DetailedProp &
  PersonDetailedProp &
  BackdropProp &
  VotesProp &
  MarkProp;

export const RatingBox = ({
  $small,
  $personDetailed,
  $detailed,
  $backdrop,
  mark,
  votes,
}: RatingBoxProps & MarkProp) => {
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
