import { Routes, Route, useLocation } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate } from 'react-router-dom';
import Loader from '../src/components/Loader/Loader.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import Layout from './components/Layout/Layout.jsx';
import Header from './components/Header/Header.jsx';
import MyFavoritesPets from '../src/components/MyNotices/MyFavoritePets/MyFavoritePets.jsx';
import Viewed from '../src/components/MyNotices/Viewed/Viewed.jsx';

const HomePage = lazy(() => import('./pages/HomePage/HomePage.jsx'));
const AddPetPage = lazy(() => import('./pages/AddPetPage/AddPetPage.jsx'));
const NewsPage = lazy(() => import('./pages/NewsPage/NewsPage.jsx'));
const RegisterPage = lazy(() =>
  import('./pages/RegisterPage/RegisterPage.jsx')
);
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage.jsx'));

const ProfilePage = lazy(() => import('./pages/ProfilePage/ProfilePage.jsx'));

const OurFriendsPage = lazy(() =>
  import('./pages/OurFriendsPage/OurFriendsPage.jsx')
);
const NoticesPage = lazy(() => import('./pages/NoticesPage/NoticesPage.jsx'));
const NotFoundPage = lazy(() =>
  import('./pages/NotFoundPage/NotFoundPage.jsx')
);

import './App.css';

function App() {
  const location = useLocation();
  const hideHeader = location.pathname === '/';
  return (
    <>
      <Suspense fallback={<Loader />}>
        {!hideHeader && <Header />}
        <Routes>
          <Route path="/" element={<Layout hideHeader={true} />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/our-friends" element={<OurFriendsPage />} />
          <Route path="/notices" element={<NoticesPage />} />
          <Route path="/add-pet" element={<AddPetPage />} />
          <Route
            path="/profile"
            element={
              <PrivateRoute redirectTo="/" component={<ProfilePage />} />
            }
          >
            <Route index element={<Navigate to="favorites" replace />} />
            <Route path="favorites" element={<MyFavoritesPets />} />
            <Route path="viewed" element={<Viewed />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <ToastContainer />
    </>
  );
}

export default App;
