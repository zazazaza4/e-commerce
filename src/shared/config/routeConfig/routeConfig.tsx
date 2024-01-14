import { RouteProps } from 'react-router-dom';

import { CheckoutPage } from 'pages/Checkout';
import { ComingSoonPage } from 'pages/ComingSoonPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProductDetailsPage } from 'pages/ProductDetailsPage';
import { ProductsPage } from 'pages/ProductsPage';

export type AppRoutesProps = RouteProps & {
  path: string;
}

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PRODUCTS = 'products',
  PRODUCT_DETAILS = 'product_details',
  CHECKOUT = 'checkout',
  CONTACT_US = 'contact_us',
  FAQ = 'faq',
  BLOG = 'blog',
  ACCESSIBILITY = 'accessibility',
  RETURN_POLICY = 'return_policy',
  TERMS_OF_SERVICE = 'terms_of_service',
  PRIVACY_POLICY = 'privacy_policy',
  SEARCH_OUR_STORE = 'search_our_store',

  NOT_FOUND = 'not_found',
}

export const RoutesPath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.CHECKOUT]: '/checkout',
  [AppRoutes.PRODUCT_DETAILS]: '/products/', // +:id
  [AppRoutes.PRODUCTS]: '/products',
  [AppRoutes.ACCESSIBILITY]: '/accessibility',
  [AppRoutes.FAQ]: '/faq',
  [AppRoutes.CONTACT_US]: '/contact_us',
  [AppRoutes.RETURN_POLICY]: '/return_policy',
  [AppRoutes.TERMS_OF_SERVICE]: '/terms_of_service',
  [AppRoutes.PRIVACY_POLICY]: '/privacy_policy',
  [AppRoutes.SEARCH_OUR_STORE]: '/search_our_store',
  [AppRoutes.BLOG]: '/blog',

  [AppRoutes.NOT_FOUND]: '/*',
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: RoutesPath.main,
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutesPath.about,
    element: <ComingSoonPage />,
  },
  [AppRoutes.CHECKOUT]: {
    path: RoutesPath.checkout,
    element: <CheckoutPage />,
  },
  [AppRoutes.PRODUCTS]: {
    path: RoutesPath.products,
    element: <ProductsPage />,
  },
  [AppRoutes.PRODUCT_DETAILS]: {
    path: `${RoutesPath.product_details}:id`,
    element: <ProductDetailsPage />,
  },
  [AppRoutes.ACCESSIBILITY]: {
    path: RoutesPath.accessibility,
    element: <ComingSoonPage />,
  },
  [AppRoutes.FAQ]: {
    path: RoutesPath.faq,
    element: <ComingSoonPage />,
  },
  [AppRoutes.CONTACT_US]: {
    path: RoutesPath.contact_us,
    element: <ComingSoonPage />,
  },
  [AppRoutes.RETURN_POLICY]: {
    path: RoutesPath.return_policy,
    element: <ComingSoonPage />,
  },
  [AppRoutes.TERMS_OF_SERVICE]: {
    path: RoutesPath.terms_of_service,
    element: <ComingSoonPage />,
  },
  [AppRoutes.PRIVACY_POLICY]: {
    path: RoutesPath.privacy_policy,
    element: <ComingSoonPage />,
  },
  [AppRoutes.SEARCH_OUR_STORE]: {
    path: RoutesPath.search_our_store,
    element: <ComingSoonPage />,
  },
  [AppRoutes.BLOG]: {
    path: RoutesPath.blog,
    element: <ComingSoonPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutesPath.not_found,
    element: <NotFoundPage />,
  },
};
