import NavItemStyled from './NavItem.styles.ts';
import { NavItemProps } from './NavItem.types.ts';

const NavItem = ({ children, linkTo, shouldDisplayOnTop }: NavItemProps) => (
  <NavItemStyled $shouldDisplayOnTop={shouldDisplayOnTop} to={linkTo}>
    {children}
  </NavItemStyled>
);

export default NavItem;
