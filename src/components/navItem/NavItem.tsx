import { NavItemStyled, RenderOnTop } from "./NavItem.styles.ts";
import { NavItemProps } from "./NavItem.types.ts";

const NavItem = ({
  children,
  linkTo,
  backgroundColor,
  color,
  shouldDisplay,
}: NavItemProps) => {
  return (
    <NavItemStyled
      to={linkTo}
      $backgroundColor={backgroundColor}
      $color={color}
      $shouldDisplayOnTop={true}
      //temporary solution to render this element only on certain pages
      style={shouldDisplay && RenderOnTop}
    >
      {children}
    </NavItemStyled>
  );
};

export default NavItem;
