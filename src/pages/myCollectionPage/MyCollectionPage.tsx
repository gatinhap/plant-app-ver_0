import PageComponent from "../../components/pageComponent/PageComponent.tsx";
import {Color} from "../../components/colors.ts";
import PlantCollection from "../../components/plantCollection/PlantCollection.tsx";
import CallToActionAsLink from "../../components/callToAction/CallToActionAsLink.tsx";

const MyCollectionPage = () => {
    return (
        <PageComponent>
            <h3>
                moja kolekcja
            </h3>
            <CallToActionAsLink
                linkTo={'/dodaj-roślinkę'}
                color={Color.cream}
                backgroundColor={Color.mediumGreen}
            >
                dodaj roślinkę do kolekcji
            </CallToActionAsLink>

            <PlantCollection/>

        </PageComponent>
    )
}

export default MyCollectionPage;