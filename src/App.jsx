import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import 'react-toastify/dist/ReactToastify.css';
import Loader from './components/Loader/Loader.jsx';
import { ToastContainer } from 'react-toastify';
import RegisterPage from './pages/RegisterPage/RegisterPage.jsx';
import LoginPage from './pages/LoginPage/LoginPage.jsx';
import { refresh } from './redux/users/usersOperations.js';
import {
  selectToken,
  selectIsRefreshing,
  selectIsAuthenticated,
} from './redux/users/usersSelectors.js';
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
  const hideHeader = location.pathname === '/main';
  const currentToken = useSelector(selectToken);
  const isRefreshing = useSelector(selectIsRefreshing);
  const isAuthenticated = useSelector(selectIsAuthenticated);

  useEffect(() => {
    if (!currentToken) return;
    dispatch(refresh());
  }, [currentToken, dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <>
      <Suspense fallback={<Loader />}>
        <Layout />
        {!hideHeader && <Header />}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/main" element={<MainPage hideHeader={true} />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/our-friends" element={<OurFriendsPage />} />
          <Route path="/notices" element={<NoticesPage />} />

          {!isAuthenticated && (
            <>
              <Route
                path="/register"
                element={
                  <RestrictedRoute
                    redirectTo="/"
                    component={<RegisterPage />}
                  />
                }
              />
              <Route
                path="/login"
                element={
                  <RestrictedRoute redirectTo="/" component={<LoginPage />} />
                }
              />
            </>
          )}

          <Route
            path="/add-pet"
            element={<PrivateRoute component={<AddPetPage />} />}
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute redirectTo="/" component={<ProfilePage />} />
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
