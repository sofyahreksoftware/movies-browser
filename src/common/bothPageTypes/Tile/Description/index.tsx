import { StyledDescription } from "./styled";
import { OverviewDescriptionProp } from "../../moviePersonTypes";

interface DescriptionProps {
  description: OverviewDescriptionProp;
}

export const Description = ({ description }: DescriptionProps) =>
  description && <StyledDescription>{description}</StyledDescription>;
