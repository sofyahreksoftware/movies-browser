import { Wrapper, Header } from "./styled";

import { Content } from "./Content";

export const Page = ({ header, status, totalResults, children }) => (
  <Wrapper>
    {header && <Header>{header}</Header>}
    <Content status={status} totalResults={totalResults} children={children} />
  </Wrapper>
);
