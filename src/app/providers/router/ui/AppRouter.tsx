import { Suspense, useCallback, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';

import { PageLoader } from 'widgets/PageLoader';

import { AppRoutesProps, routeConfig } from 'shared/config/routeConfig/routeConfig';

const AppRouter = () => {
  const renderWithWrapper = useCallback((route: AppRoutesProps) => {
    const element = (
      <Suspense fallback={<PageLoader />} key={route.id}>
        <div className="page-wrapper">
          {route.element}
        </div>
      </Suspense>
    );

    return (
      <Route key={route.path} path={route.path} element={element} />
    );
  }, []);

  const memoizedRoutes = useMemo(() => Object.values(routeConfig).map(renderWithWrapper), [renderWithWrapper]);

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {memoizedRoutes}
      </Routes>
    </Suspense>
  );
};

export { AppRouter };
