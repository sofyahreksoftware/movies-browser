import { Detail, DetailLabel, DetailValue } from "./styled";

export const DetailedData = ({ productionPlaces, releaseDate }) => (
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
  </>
);
