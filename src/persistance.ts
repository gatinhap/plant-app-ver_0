//this is total work in progress and needs to be integrated with Form.tsx and tested if it's working

export const getUserPlantData = () => {
  let storedPlants = JSON.parse(localStorage.getItem("plants"));
  if (!storedPlants) {
    storedPlants = {
      plants: [],
    };
    console.log("Loaded empty database");
    savePlants(storedPlants);
  }
  return storedPlants;
};

export const savePlants = (plants) => {
  console.log("Saving plants");
  console.log(plants);
  localStorage.setItem("plants", JSON.stringify(plants));
};

export const addPlant = (plant) => {
  console.log("Adding plant");
  console.log(plant);
  const userPlantData = getUserPlantData();
  userPlantData.plants.push(plant);
  savePlants(userPlantData);
};
