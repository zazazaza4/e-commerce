import i18n from 'i18next';

import { RoutesPath } from 'shared/config/routeConfig/routeConfig';

export interface FooterItemType {
    path: string;
    text: string;
}

export const FooterHelpList: FooterItemType[] = [
  {
    path: RoutesPath.contact_us,
    text: i18n.t('footer.contact-us'),
  },
  {
    path: RoutesPath.faq,
    text: i18n.t('footer.faq'),
  },
  {
    path: RoutesPath.accessibility,
    text: i18n.t('footer.accessibility'),
  },
];

export const FooterAboutList: FooterItemType[] = [
  {
    path: RoutesPath.about,
    text: i18n.t('footer.about-us'),
  },
  {
    path: RoutesPath.search_our_store,
    text: i18n.t('footer.search-our-store'),
  },
  {
    path: RoutesPath.blog,
    text: i18n.t('footer.blog'),
  },
];

export const FooterInfoList: FooterItemType[] = [
  {
    path: RoutesPath.return_policy,
    text: i18n.t('footer.return-policy'),
  },
  {
    path: RoutesPath.terms_of_service,
    text: i18n.t('footer.term-of-service'),
  },
  {
    path: RoutesPath.privacy_policy,
    text: i18n.t('footer.privacy-policy'),
  },
];
