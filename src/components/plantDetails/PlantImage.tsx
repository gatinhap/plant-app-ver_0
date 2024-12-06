import placeholder from '../../assets/placeholder.jpg';
import { PlantImageContainerStyled } from './PlantDetail.styles.ts';
import { PlantImageProps } from './PlantDetail.types.ts';

const PlantImage = ({ isCustomImage = true, imgSrc }: PlantImageProps) => {
  const imgAlt = 'plant';

  return (
    <PlantImageContainerStyled>
      <img alt={imgAlt} src={isCustomImage ? imgSrc : placeholder} />
    </PlantImageContainerStyled>
  );
};

export default PlantImage;
