import { ReactNode } from 'react';
import { CallToActionAsLinkStyled } from './CallToActionButton.styles.ts';

interface CallToActionAsLinkProps {
  readonly children: ReactNode;
  readonly linkTo: string;
}

const CallToActionAsLink = ({ children, linkTo }: CallToActionAsLinkProps) => (
  <CallToActionAsLinkStyled to={linkTo}>{children}</CallToActionAsLinkStyled>
);

export default CallToActionAsLink;
