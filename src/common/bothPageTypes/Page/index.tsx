import {
  HeaderProp,
  StatusProp,
  TotalResultsProp,
  ChildrenProp,
  QueryProp,
} from "../displayTypes";

import { Wrapper } from "./styled";
import { Header } from "../Header";
import { Content } from "./Content";

interface PageProps {
  status: StatusProp;
  header?: HeaderProp;
  totalResults?: TotalResultsProp;
  children?: ChildrenProp;
  query?: QueryProp;
}

export const Page = ({
  status,
  header,
  totalResults,
  children,
  query,
}: PageProps) => (
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
