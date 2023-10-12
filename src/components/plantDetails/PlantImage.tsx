import placeholder from '../../assets/placeholder.jpg'
import {PlantImageContainerStyled} from "./PlantDetail.styles.ts";
import {PlantImageProps} from "./PlantDetail.types.ts";

const PlantImage = (
    {
        isCustomImage = true,
        imgSrc
    }: PlantImageProps) => {

    return (
        <PlantImageContainerStyled>
            <img
                src={isCustomImage ? imgSrc : placeholder}
                alt={'plant image'}/>
        </PlantImageContainerStyled>
    )
}

export default PlantImage;