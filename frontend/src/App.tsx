import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { lightTheme } from './styles/theme';
import GlobalStyles from './styles/global';
import { FormProvider } from './contexts/FormContext';
import { Header } from './components/Layout/Header';
import { Footer } from './components/Layout/Footer';
import { ErrorBoundary } from './components/Common/ErrorBoundary';
import { ROUTES } from './constants/routes';

import Home from './pages/Home';
import Report from './pages/Report';
import About from './pages/About';
import FAQs from './pages/FAQs';
import Support from './pages/Support';
import Refresh from './pages/Refresh';
import Error404 from './pages/Error404';
import Error500 from './pages/Error500';

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <ThemeProvider theme={lightTheme as DefaultTheme}>
        <GlobalStyles />
        <BrowserRouter>
          <FormProvider totalSteps={3}>
            <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
              <Header />
              <main style={{ flex: 1 }}>
                <Routes>
                  <Route path={ROUTES.HOME} element={<Home />} />
                  <Route path={ROUTES.REPORT} element={<Report />} />
                  <Route path={ROUTES.ABOUT} element={<About />} />
                  <Route path={ROUTES.FAQS} element={<FAQs />} />
                  <Route path={ROUTES.SUPPORT} element={<Support />} />
                  <Route path={ROUTES.REFRESH} element={<Refresh />} />
                  <Route path={ROUTES.ERROR_500} element={<Error500 />} />
                  <Route path={ROUTES.ERROR_404} element={<Error404 />} />
                  <Route path="*" element={<Navigate to={ROUTES.ERROR_404} replace />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </FormProvider>
        </BrowserRouter>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;