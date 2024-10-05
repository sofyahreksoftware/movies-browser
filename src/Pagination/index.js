import { usePageButton } from "../common/queries/usePageButton";
import {
  Button,
  ButtonText,
  PageCounter,
  PageNumbers,
  ArrowIcon,
  Wrapper,
} from "./styled";

export const Pagination = () => {
  const {
    page,
    totalPages,
    setNextPage,
    setPreviousPage,
    setFirstPage,
    setLastPage,
  } = usePageButton();
  
  const isFirstPage = page === 1;
  const isLastPage = page === totalPages;

  return (
    <Wrapper>
      <Button onClick={setFirstPage} disabled={isFirstPage}>
        <ArrowIcon disabled={isFirstPage} />
        <ArrowIcon disabled={isFirstPage} />
        <ButtonText>First</ButtonText>
      </Button>

      <Button onClick={setPreviousPage} disabled={isFirstPage}>
        <ArrowIcon disabled={isFirstPage} />
        <ButtonText>Previous</ButtonText>
      </Button>

      <PageCounter>
        Page <PageNumbers>{page}</PageNumbers> of{" "}
        <PageNumbers>{totalPages}</PageNumbers>
      </PageCounter>

      <Button onClick={setNextPage} disabled={isLastPage}>
        <ButtonText>Next</ButtonText>
        <ArrowIcon disabled={isLastPage} $toNextPage />
      </Button>

      <Button onClick={setLastPage} disabled={isLastPage}>
        <ButtonText>Last</ButtonText>
        <ArrowIcon disabled={isLastPage} $toNextPage />
        <ArrowIcon disabled={isLastPage} $toNextPage />
      </Button>
    </Wrapper>
  );
};
