import {
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import PlantDetailPage from "./pages/plantDetailPage/PlantDetailPage.tsx";
import MyCollectionPage from "./pages/myCollectionPage/MyCollectionPage.tsx";
import AddNewPlant from "./pages/addNewPlantPage/AddNewPlant.tsx";

function App() {

    return (
        <>
            <Routes>
                <Route path={"/"} element={<MyCollectionPage/>}/>
                <Route path={'/dodaj-roślinkę'} element={<AddNewPlant/>}/>
                {/*if I'm rendering Routes below single plant component
                 I need to add a star at the end of path='/plant-name/*' */ }
                <Route path={'/monstera/*'} element={<PlantDetailPage/>}/>
                <Route path="*" element={<Navigate to="/" replace/>}/>
            </Routes>
        </>
    )
}

export default App
