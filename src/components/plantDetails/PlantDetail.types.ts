import { ReactNode } from 'react';

export interface PlantImageProps {
  imgSrc: string;
  isCustomImage: boolean;
}

export interface PlantInfoProps {
  children: ReactNode;
  title: string;
}

export interface PlantNavItemProps {
  children: ReactNode;
  linkTo: string;
}
