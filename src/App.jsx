import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import Loader from './components/Loader/Loader.jsx';
import { ToastContainer } from 'react-toastify';
import RegisterPage from './pages/RegisterPage/RegisterPage.jsx';
import LoginPage from './pages/LoginPage/LoginPage.jsx';
import { getCurrentUserFullInfo } from './redux/users/usersOperations.js';
import { selectToken } from './redux/users/usersSelectors.js';
import PrivateRoute from './components/PrivateRoute.jsx';
import RestrictedRoute from './components/RestrictedRoute.jsx';
import Layout from './components/Layout/Layout.jsx';
import Header from './components/Header/Header.jsx';
import MyFavoritePets from './components/MyNotices/MyFavoritePets/MyFavoritePets.jsx';
import Viewed from './components/MyNotices/Viewed/Viewed.jsx';
const MainPage = lazy(() => import('./pages/MainPage/MainPage.jsx'));
const HomePage = lazy(() => import('./pages/HomePage/HomePage.jsx'));
const AddPetPage = lazy(() => import('./pages/AddPetPage/AddPetPage.jsx'));
const NewsPage = lazy(() => import('./pages/NewsPage/NewsPage.jsx'));
// const RegisterPage = lazy(() =>
//   import('./pages/RegisterPage/RegisterPage.jsx')
// );
// const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage.jsx'));

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
  const dispatch = useDispatch();
  const location = useLocation();
  const hideHeader = location.pathname === '/';
  const token = useSelector(selectToken);

  useEffect(() => {
    if (!token) return;
    dispatch(getCurrentUserFullInfo());
  }, [token, dispatch]);
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Layout />
        {!hideHeader && <Header />}
        <Routes>
          <Route path="/" element={<MainPage hideHeader={true} />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/our-friends" element={<OurFriendsPage />} />
          <Route path="/notices" element={<NoticesPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />

          <Route
            path="/add-pet"
            element={<PrivateRoute component={<AddPetPage />} />}
          />

          <Route
            path="/profile"
            element={
              <PrivateRoute redirectTo="/home" component={<ProfilePage />} />
            }
          >
            <Route index element={<Navigate to="favorites" replace />} />
            <Route path="favorites" element={<MyFavoritePets />} />
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
