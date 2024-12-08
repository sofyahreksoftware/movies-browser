import {
  StatusProp,
  TotalResultsProp,
  ChildrenProp,
  QueryProp,
} from "../../displayTypes";

import { LoadingPage } from "./statusPages/LoadingPage";
import { ErrorPage } from "./statusPages/ErrorPage";
import { NoResultsPage } from "./statusPages/NoResultsPage";

interface ContentProps {
  status: StatusProp;
  totalResults?: TotalResultsProp;
  children?: ChildrenProp;
  query?: QueryProp;
}

export const Content = ({
  status,
  totalResults,
  children,
  query,
}: ContentProps) => {
  switch (status) {
    case "loading":
      return <LoadingPage />;

    case "error":
      return <ErrorPage />;

    case "success":
      if (totalResults === 0) {
        return <NoResultsPage query={query} />;
      }
      return children;

    case "initial":
      return null;

    default:
      throw new Error("Incorrect status");
  }
};
