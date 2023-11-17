import { NavItemStyled } from "./NavItem.styles.ts";
import { NavItemProps } from "./NavItem.types.ts";

const NavItem = ({ children, linkTo, shouldDisplayOnTop }: NavItemProps) => {
  return (
    <NavItemStyled to={linkTo} $shouldDisplayOnTop={shouldDisplayOnTop}>
      {children}
    </NavItemStyled>
  );
};

export default NavItem;
