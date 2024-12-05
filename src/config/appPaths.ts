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

const AppPaths = {
  Public: PublicPaths,
  Private: PrivatePaths,
} as const;

export default AppPaths;
