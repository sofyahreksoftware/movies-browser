import { LoadingPage } from "./statusPages/LoadingPage";
import { ErrorPage } from "./statusPages//ErrorPage";
import { NoResultsPage } from "./statusPages/NoResultsPage";

export const Content = ({ status, totalResults, children }) => {
  switch (status) {
    case "loading":
      return <LoadingPage />;

    case "error":
      return <ErrorPage />;

    case "success":
      if (totalResults === 0) {
        return <NoResultsPage />;
      }
      return children;

    case "initial":
      return null;

    default:
      throw new Error("Incorrect status");
  }
};
