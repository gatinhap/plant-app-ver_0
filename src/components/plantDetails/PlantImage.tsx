import placeholder from '../../assets/placeholder.jpg';
import { PlantImageContainerStyled } from './PlantDetail.styles.ts';
import { PlantImageProps } from './PlantDetail.types.ts';

function PlantImage({ isCustomImage = true, imgSrc }: PlantImageProps) {
  return (
    <PlantImageContainerStyled>
      <img alt="plant image" src={isCustomImage ? imgSrc : placeholder} />
    </PlantImageContainerStyled>
  );
}

export default PlantImage;
