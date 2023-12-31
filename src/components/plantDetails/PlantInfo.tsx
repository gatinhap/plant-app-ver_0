import { PlantInfoStyled } from "./PlantDetail.styles.ts";
import { PlantInfoProps } from "./PlantDetail.types.ts";

const PlantInfo = ({ children, title }: PlantInfoProps) => {
  return (
    <PlantInfoStyled>
      <h4>{title}</h4>
      {children}
    </PlantInfoStyled>
  );
};

export default PlantInfo;
