import placeholder from '../../assets/placeholder.jpg';
import { PlantImageContainerStyled } from './PlantDetail.styles.ts';
import { PlantImageProps } from './PlantDetail.types.ts';

const PlantImage = ({ isCustomImage = true, imgSrc }: PlantImageProps) => (
  <PlantImageContainerStyled>
    <img alt="plant" src={isCustomImage ? imgSrc : placeholder} />
  </PlantImageContainerStyled>
);

export default PlantImage;
