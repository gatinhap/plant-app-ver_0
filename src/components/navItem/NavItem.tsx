import {NavItemStyled} from "./NavItem.styles.ts";
import {NavItemProps} from "./NavItem.types.ts";

const NavItem = (
    {
        children,
        linkTo,
        backgroundColor,
        color,
        shouldDisplay
    }: NavItemProps) => {

    return (
        <NavItemStyled
            to={linkTo}
            $backgroundColor={backgroundColor}
            $color={color}
            //temporary solution to render this element only on certain pages
            className={`${shouldDisplay && 'render-on-top'}`}
        >
            {children}
        </NavItemStyled>
    )
}

export default NavItem;