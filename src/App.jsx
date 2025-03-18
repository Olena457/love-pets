import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from '../src/components/Loader/Loader.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import Header from './components/Header/Header.jsx';
import Layout from './components/Layout/Layout.jsx';

const HomePage = lazy(() => import('../src/pages/HomePage/HomePage.jsx'));
const NewsPage = lazy(() => import('../src/pages/NewsPage/NewsPage.jsx'));
const RegisterPage = lazy(() =>
  import('../src/pages/RegisterPage/RegisterPage.jsx')
);
const LoginPage = lazy(() => import('../src/pages/LoginPage/LoginPage.jsx'));

const ProfilePage = lazy(() =>
  import('../src/pages/ProfilePage/ProfilePage.jsx')
);

const NotFoundPage = lazy(() =>
  import('../src/pages/NotFoundPage/NotFoundPage.jsx')
);

import './App.css';

function App() {
  // const location = useLocation();
  return (
    <Suspense fallback={<Loader />}>
      <Header />
      <Routes>
        <Route path="/" element={<Layout />} />

        <Route path="/home" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/news" element={<NewsPage />} />
        {/* <Route path="/add" element={<AddPage />} /> */}
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
