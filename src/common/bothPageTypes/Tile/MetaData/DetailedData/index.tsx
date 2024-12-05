import { Detail, DetailLabel, DetailValue } from "./styled";

import { PersonDetailed } from "../../styledTypes";
import {
  ReleaseDateProp,
  DateOfBirthProp,
  PlaceOfBirthProp,
  ProductionPlace,
  ProductionPlaces,
} from "../../../Article/types";

interface DetailedDataProps {
  productionPlaces: ProductionPlaces;
  releaseDate: ReleaseDateProp;
  dateOfBirth: DateOfBirthProp;
  placeOfBirth: PlaceOfBirthProp;
  $personDetailed?: PersonDetailed;
}

export const DetailedData = ({
  productionPlaces,
  releaseDate,
  dateOfBirth,
  placeOfBirth,
  $personDetailed,
}: DetailedDataProps) => (
  <>
    {productionPlaces && (
      <Detail>
        <DetailLabel>Production:</DetailLabel>
        {productionPlaces?.map(
          (productionPlace: ProductionPlace, index: number) => (
            <DetailValue key={index}>
              {productionPlace.name}
              {index === productionPlaces.length - 1 ? "." : ","}
            </DetailValue>
          )
        )}
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
