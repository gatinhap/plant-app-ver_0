const PublicPaths = {
  WelcomePage: '/welcome',
  Register: '/registration',
  Login: '/login',
} as const;

const PrivatePaths = {
  PlantCollection: '/',
  AddNewPlant: '/dodaj-roślinkę',
  PlantDetailPage: '/:plantId/*',
  EditPlant: '/:plantId/edit',
  RemovePlant: '/:plantId/delete',
  FallbackRoute: '*',
} as const;

const PlantDetailPaths = {
  Watering: '/podlewanie',
  Misting: '/zraszanie',
  Light: '/światło',
  Soil: '/gleba',
  Fertilization: '/nawożenie',
  EditData: '/edit',
  RemovePlant: '/delete',
} as const;

const AppPaths = {
  Public: PublicPaths,
  Private: PrivatePaths,
  PlantDetails: PlantDetailPaths,
} as const;

export default AppPaths;
