import { StyledDescription } from "./styled";
import { OverviewProp } from "../../moviePersonTypes";

interface DescriptionProps {
  description: OverviewProp;
}

export const Description = ({ description }: DescriptionProps) =>
  description && <StyledDescription>{description}</StyledDescription>;
