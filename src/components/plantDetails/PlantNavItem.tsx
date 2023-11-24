import { PlantNavItemStyled } from "./PlantDetail.styles.ts";
import { PlantNavItemProps } from "./PlantDetail.types.ts";

const PlantNavItem = ({ children, linkTo }: PlantNavItemProps) => {
  return <PlantNavItemStyled to={linkTo}>{children}</PlantNavItemStyled>;
};

export default PlantNavItem;
