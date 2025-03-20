import { Routes, Route, useLocation } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from '../src/components/Loader/Loader.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import Layout from './components/Layout/Layout.jsx';
import Header from './components/Header/Header.jsx';

const HomePage = lazy(() => import('../src/pages/HomePage/HomePage.jsx'));
const NewsPage = lazy(() => import('../src/pages/NewsPage/NewsPage.jsx'));
const RegisterPage = lazy(() =>
  import('../src/pages/RegisterPage/RegisterPage.jsx')
);
const LoginPage = lazy(() => import('../src/pages/LoginPage/LoginPage.jsx'));

const ProfilePage = lazy(() =>
  import('../src/pages/ProfilePage/ProfilePage.jsx')
);

const NoticesPage = lazy(() =>
  import('../src/pages/NoticesPage/NoticesPage.jsx')
);
const NotFoundPage = lazy(() =>
  import('../src/pages/NotFoundPage/NotFoundPage.jsx')
);

import './App.css';

function App() {
  const location = useLocation();
  const hideHeader = location.pathname === '/';
  return (
    <Suspense fallback={<Loader />}>
      {!hideHeader && <Header />}
      <Routes>
        <Route path="/" element={<Layout hideHeader={true} />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/notices" element={<NoticesPage />} />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <ProfilePage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
