import { CallToActionButtonStyled } from './CallToActionButton.styles.ts';
import { CallToActionProps } from './CallToActionButton.types.ts';

function CallToActionButton({ children, handleClick }: CallToActionProps) {
  return (
    <CallToActionButtonStyled onClick={handleClick}>
      {children}
    </CallToActionButtonStyled>
  );
}

export default CallToActionButton;
