import { CallToActionAsLinkStyled } from "./CallToAction.styles.ts";
import { ReactNode } from "react";

type CallToActionAsLinkProps = {
  children: ReactNode;
  backgroundColor: string;
  color: string;
  linkTo: string;
};

const CallToActionAsLink = ({
  children,
  backgroundColor,
  color,
  linkTo,
}: CallToActionAsLinkProps) => {
  return (
    <CallToActionAsLinkStyled
      to={linkTo}
      $backgroundColor={backgroundColor}
      $color={color}
    >
      {children}
    </CallToActionAsLinkStyled>
  );
};

export default CallToActionAsLink;
