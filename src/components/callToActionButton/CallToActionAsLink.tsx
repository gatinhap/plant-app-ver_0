import { CallToActionAsLinkStyled } from "./CallToActionButton.styles.ts";
import { ReactNode } from "react";

type CallToActionAsLinkProps = {
  children: ReactNode;
  linkTo: string;
};

const CallToActionAsLink = ({ children, linkTo }: CallToActionAsLinkProps) => {
  return (
    <CallToActionAsLinkStyled to={linkTo}>{children}</CallToActionAsLinkStyled>
  );
};

export default CallToActionAsLink;
