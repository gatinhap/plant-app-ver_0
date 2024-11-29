import { CallToActionButtonStyled } from './CallToActionButton.styles.ts';
import { CallToActionProps } from './CallToActionButton.types.ts';

const CallToActionButton = ({ children, handleClick }: CallToActionProps) => (
  <CallToActionButtonStyled onClick={handleClick}>
    {children}
  </CallToActionButtonStyled>
);

export default CallToActionButton;
