import { ReactNode } from 'react';
import { CallToActionAsLinkStyled } from './CallToActionButton.styles.ts';

interface CallToActionAsLinkProps {
  readonly children: ReactNode;
  readonly linkTo: string;
}

function CallToActionAsLink({ children, linkTo }: CallToActionAsLinkProps) {
  return (
    <CallToActionAsLinkStyled to={linkTo}>{children}</CallToActionAsLinkStyled>
  );
}

export default CallToActionAsLink;
