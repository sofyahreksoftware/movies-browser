import { Wrapper } from "./styled";
import { Header } from "../Header";

import { Content } from "./Content";

export const Page = ({ header, status, totalResults, children }) => (
  <Wrapper>
    {header && <Header as="h1">{header}</Header>}
    <Content status={status} totalResults={totalResults} children={children} />
  </Wrapper>
);
