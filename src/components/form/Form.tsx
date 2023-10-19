import LabelField from "../inputAndLabel/LabelField.tsx";
import InputField from "../inputAndLabel/InputField.tsx";
import FormButton from "./FormButton.tsx";
import {StyledForm} from "./Form.styles.ts";
import {theme} from "../../theme/theme.ts";
import {ChangeEvent, KeyboardEvent, SyntheticEvent, useEffect, useState} from "react";
import {nanoid} from "nanoid";
import NavItem from "../navItem/NavItem.tsx";

//retrieve data from local storage
//if no data is saved return empty object
const getPlants = () => {
  const storedPlants = JSON.parse(localStorage.getItem("formData"));
  if (!storedPlants)
    return {
      plants: [
        {
          plantID: "",
          plantName: "",
          plantImage: "",
        },
      ],
    };
  return storedPlants;
};

const Form = () => {
  const [initialFormData, setInitialFormData] = useState(getPlants);
  const [singlePlant, setSinglePlant] = useState(initialFormData.plants[0]);

  //IMAGE PROBABLY WILL BE ADDED IN ANOTHER ITERATION
  // const [image, setImage] = useState('')
  //
  // const onImageChange = (event) => {
  //     setImage(URL.createObjectURL(event.target.files[0]))
  // }

  //control inputs and create ID for single plant
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value }: EventTarget & HTMLInputElement = event.target;
    const newPlantID = nanoid();

    setSinglePlant((prevSinglePlant) => {
      return {
        ...prevSinglePlant,
        plantID: newPlantID,
        [name]: value,
      };
    });
  };

  //set state of formData with all data put by user
  const submitFormData = () => {
    setInitialFormData((prevInitialFormData) => {
      //push to plant array single plant
      //!! how to add first plant to fill the empty keys
      //and only then start adding other plants??
      // addPlant(prevInitialFormData.plants);
      prevInitialFormData.plants.push(singlePlant);

      return {
        ...prevInitialFormData,
      };
    });
  };

  //prevent page refresh when submit button is pressed
  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
  };

  //prevent form submission when user clicks enter -> is wrong -> the inputs will be validated so that the user have to fill them
  //this function will be removed
  const handleKeyDown = (event: KeyboardEvent<HTMLElement | undefined>) => {
    if (event.keyCode === 13) {
      event.preventDefault();
    }
  };

  //save in local storage saved plants data
  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(initialFormData));
  }, [initialFormData]);

  console.log(initialFormData);

  return (
    <>
      {/*for now there are only two fields for testing purposes, later the rest will be added*/}
      <StyledForm onSubmit={handleSubmit}>
        <div>
          <LabelField>
            podaj nazwę roślinki
            <InputField
              height={"50px"}
              placeholder={"nazywam się..."}
              type={"text"}
              name={"plantName"}
              value={singlePlant.plantName}
              handleChange={handleChange}
              onKeyDown={handleKeyDown}
            />
          </LabelField>
        </div>
        <div>
          <LabelField>
            dodaj jej zdjęcie
            <InputField
              height={"190px"}
              placeholder={
                "zalecane wymiary to min. 250px na 200px, format png  lub jpg"
              }
              type={"file"}
              accept="image/png, image/jpeg"
              name={"plantImage"}
              handleChange={handleChange}
              value={singlePlant.plantImage}
            />
          </LabelField>
        </div>

                <FormButton
                    type={'submit'}
                    color={theme.colors.cream}
                    backgroundColor={theme.colors.mediumGreen}
                    handleClick={submitFormData}
                >
                    zapisz
                </FormButton>
            </StyledForm>

            <h4>from local storage</h4>
            <p style={{color: theme.colors.cream}}>To check if data is correctly received. For now it's not really
                working. The
                context will be created later on and initialFormData mapped in correct places</p>

            {initialFormData.plants.map((item, index) => {
                return (
                    <NavItem
                        backgroundColor={theme.colors.lightGreen}
                        color={theme.colors.mediumGreen}
                        key={index}
                        linkTo={`/${item.plantName}`}
                    >
                        {item.plantName}
                    </NavItem>
                )
            })}
        </>

    )
}

export default Form;
