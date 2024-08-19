import { Link } from "react-router-dom";
import { nanoid } from "@reduxjs/toolkit";

import { getImageUrl } from "../../../../common/getImageUrl";
import { toPersonDetails } from "../../../../core/routes";

import { Tile } from "../../../../common/Tile";

import { Wrapper, Item } from "./styled";

export const PeopleList = ({ people }) => (
  <Wrapper $small>
    {people?.map((person) => (
      <Link to={toPersonDetails({ personId: person.id })} key={nanoid()}>
        <Item key={nanoid()}>
          <Tile
            $small
            {...(person.profile_path && {
              poster: getImageUrl({
                size: "/w342",
                path: `${person.profile_path}.jpg`,
              }),
            })}
            title={person.name}
            role={person.character}
          />
        </Item>
      </Link>
    ))}
  </Wrapper>
);
