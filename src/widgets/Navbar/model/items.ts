import i18n from 'i18next';

import { RoutesPath } from 'shared/config/routeConfig/routeConfig';

export interface NavbarItemType {
    path: string;
    text: string;
}

export const NavbarItemList: NavbarItemType[] = [
  {
    path: RoutesPath.main,
    text: i18n.t('navbar.main'),
  },
  {
    path: RoutesPath.about,
    text: i18n.t('navbar.about'),
  },
  {
    path: RoutesPath.products,
    text: i18n.t('navbar.products'),
  },
];
