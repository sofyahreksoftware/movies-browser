import { Detail, DetailLabel, DetailValue } from "./styled";

export const DetailedData = ({
  productionPlaces,
  releaseDate,
  dateOfBirth,
  placeOfBirth,
  $personDetailed,
}) => (
  <>
    {productionPlaces && (
      <Detail>
        <DetailLabel>Production:</DetailLabel>
        {productionPlaces?.map((productionPlace, index) => (
          <DetailValue key={index}>
            {productionPlace.name}
            {index === productionPlaces.length - 1 ? "." : ","}
          </DetailValue>
        ))}
      </Detail>
    )}
    {releaseDate && (
      <Detail>
        <DetailLabel>Release date:</DetailLabel>
        <DetailValue>{releaseDate}</DetailValue>
      </Detail>
    )}

    {dateOfBirth && (
      <Detail>
        <DetailLabel $personDetailed={$personDetailed}>
          Date of birth:
        </DetailLabel>
        <DetailValue>{dateOfBirth}</DetailValue>
      </Detail>
    )}
    {placeOfBirth && (
      <Detail>
        <DetailLabel $personDetailed={$personDetailed}>
          Place of birth:
        </DetailLabel>
        <DetailValue>{placeOfBirth}</DetailValue>
      </Detail>
    )}
  </>
);
