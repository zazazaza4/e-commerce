import { RoutesPath } from 'shared/config/routeConfig/routeConfig';

export interface NavbarItemType {
    path: string;
    text: string;
}

export const NavbarItemList: NavbarItemType[] = [
  {
    path: RoutesPath.main,
    text: 'navbar.main',
  },
  {
    path: RoutesPath.about,
    text: 'navbar.about',
  },
  {
    path: RoutesPath.products,
    text: 'navbar.products',
  },
];
