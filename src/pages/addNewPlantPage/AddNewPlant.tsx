import PageComponent from "../../components/pageComponent/PageComponent.tsx";
import NavItem from "../../components/navItem/NavItem.tsx";
import {theme} from "../../theme/theme.ts";
import Form from "../../components/form/Form.tsx";

const AddNewPlant = () => {
    return (
        <PageComponent>
            <NavItem
                backgroundColor={theme.colors.lightGreen}
                color={theme.colors.mediumGreen}
                linkTo={'/'}
                shouldDisplay={true}
            >
                moja kolekcja
            </NavItem>
            <h3>dodaj roślinkę</h3>
            <Form/>

        </PageComponent>
    )
}

export default AddNewPlant;
