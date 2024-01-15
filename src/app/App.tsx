import { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from '@mui/material';

import { AppRouter } from 'app/providers/router';
import { PageContainer } from 'app/styles';
import { themes } from 'app/styles/theme/theme';

import { Footer } from 'widgets/Footer';
import { Navbar } from 'widgets/Navbar';

import { Cart } from 'entities/Cart';

import { ScrollToTop } from 'shared/lib/components/ScrollToTop/ScrollToTop';

const App = () => (
  <ThemeProvider theme={themes.default}>
    <Suspense fallback="">
      <Navbar />
      <PageContainer>
        <AppRouter />
      </PageContainer>
      <Footer />
      <Cart />
      <ToastContainer />
      <ScrollToTop />
    </Suspense>
  </ThemeProvider>

);
export default App;
