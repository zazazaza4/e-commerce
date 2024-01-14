import { RoutesPath } from 'shared/config/routeConfig/routeConfig';

export interface FooterItemType {
    path: string;
    text: string;
}

export const FooterHelpList: FooterItemType[] = [
  {
    path: RoutesPath.contact_us,
    text: 'footer.contact-us',
  },
  {
    path: RoutesPath.faq,
    text: 'footer.faq',
  },
  {
    path: RoutesPath.accessibility,
    text: 'footer.accessibility',
  },
];

export const FooterAboutList: FooterItemType[] = [
  {
    path: RoutesPath.about,
    text: 'footer.about-us',
  },
  {
    path: RoutesPath.search_our_store,
    text: 'footer.search-our-store',
  },
  {
    path: RoutesPath.blog,
    text: 'footer.blog',
  },
];

export const FooterInfoList: FooterItemType[] = [
  {
    path: RoutesPath.return_policy,
    text: 'footer.return-policy',
  },
  {
    path: RoutesPath.terms_of_service,
    text: 'footer.term-of-service',
  },
  {
    path: RoutesPath.privacy_policy,
    text: 'footer.privacy-policy',
  },
];
