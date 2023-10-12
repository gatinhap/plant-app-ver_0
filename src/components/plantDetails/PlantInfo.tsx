import {PlantInfoStyled} from "./PlantDetail.styles.ts";
import {PlantInfoProps} from "./PlantDetail.types.ts";

const PlantInfo = (
    {
        children,
        title,
    }: PlantInfoProps) => {
    return (
        <PlantInfoStyled>
            {/*I'll need the {title} to be passed as a Route path in the plant detail page*/}
            <h4>{title}</h4>
            {children}
        </PlantInfoStyled>
    )
}

export default PlantInfo;