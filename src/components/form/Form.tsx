import LabelField from "../inputAndLabel/LabelField.tsx";
import {useForm} from "react-hook-form";
import FormButton from "./FormButton.tsx";
import {Color} from "../colors.ts";
import {StyledForm} from "./Form.styles.ts";
import {nanoid} from "nanoid";
import InputField from "../inputAndLabel/InputField.tsx";
import NavItem from "../navItem/NavItem.tsx";

const Form = () => {
    const storedPlants = JSON.parse(localStorage.getItem('formData'));

    const plantsArray = storedPlants ? storedPlants : []

    const {
        register,
        handleSubmit,
        reset
    } = useForm();

    const onSubmit = (data) => {
        const id = nanoid();
        const newPlant = {
            ...data,
            plantID: id,
        }

        plantsArray.push(newPlant)

        localStorage.setItem("formData", JSON.stringify(plantsArray))

        reset();
    }

    console.log(plantsArray)

    return (
        <>
            <StyledForm onSubmit={handleSubmit(onSubmit)}>
                <LabelField>podaj nazwę roślinki
                    <InputField
                        height={'50px'}
                        placeholder={'nazywam się...'}
                        type={'text'}
                        {...register('plantName')}
                    />
                </LabelField>

                <LabelField>jak chcesz ją podlewać
                    <InputField
                        height={'50px'}
                        placeholder={'wpisz jak bardzo lubię wodę...'}
                        type={'text'}
                        {...register('watering')}
                    />
                </LabelField>
                <LabelField>czy lubi zraszanie
                    <InputField
                        height={'50px'}
                        placeholder={'niektóre z nas to uwielbiają, a inne \n' +
                            'nie mogą znieść, a ja...'}
                        type={'text'}
                        {...register('misting')}

                    />
                </LabelField>
                <FormButton
                    type={'submit'}
                    color={Color.cream}
                    backgroundColor={Color.mediumGreen}
                >
                    zapisz
                </FormButton>

                <h4>plants from local storage</h4>

                {plantsArray.map((item, index) => {
                    return (
                        <div key={index}>
                            <NavItem
                                backgroundColor={Color.lightGreen}
                                color={Color.mediumGreen}
                                linkTo={`/${item.plantName}`}
                            >
                                {item.plantName}
                            </NavItem>
                            <span>
                                {item.watering}
                            </span>
                        </div>
                    )
                })}
            </StyledForm>
        </>
    )
}

export default Form;