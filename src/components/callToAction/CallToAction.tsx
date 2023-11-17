import { CallToActionStyled } from "./CallToAction.styles.ts";
import { CallToActionProps } from "./CallToAction.types.ts";

const CallToAction = ({ children, handleClick }: CallToActionProps) => {
  return (
    <CallToActionStyled onClick={handleClick}>{children}</CallToActionStyled>
  );
};

export default CallToAction;
