import { NavItemStyled } from './NavItem.styles.ts';
import { NavItemProps } from './NavItem.types.ts';

function NavItem({ children, linkTo, shouldDisplayOnTop }: NavItemProps) {
  return (
    <NavItemStyled $shouldDisplayOnTop={shouldDisplayOnTop} to={linkTo}>
      {children}
    </NavItemStyled>
  );
}

export default NavItem;
