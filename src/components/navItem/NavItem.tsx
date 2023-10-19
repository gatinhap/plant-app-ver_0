import { NavItemStyled } from "./NavItem.styles.ts";
import { NavItemProps } from "./NavItem.types.ts";

const NavItem = (
    {
        children,
        linkTo,
        backgroundColor,
        color,
        shouldDisplay
    }: NavItemProps) => {

    const RenderOnTop = {
        position: 'absolute',
        top: '10px',
        right: '0',
    }

    return (
        <NavItemStyled
            to={linkTo}
            $backgroundColor={backgroundColor}
            $color={color}
            //temporary solution to render this element only on certain pages
            style={shouldDisplay && RenderOnTop}
        >
            {children}
        </NavItemStyled>
    )
}

export default NavItem;
