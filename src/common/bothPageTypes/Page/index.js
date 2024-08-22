import { Wrapper } from "./styled";
import { Header } from "../Header";

import { Content } from "./Content";

export const Page = ({ header, status, totalResults, children, query }) => (
  <Wrapper>
    {header && totalResults !== 0 && <Header as="h1">{header}</Header>}
    <Content
      status={status}
      totalResults={totalResults}
      children={children}
      query={query}
    />
  </Wrapper>
);
