import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import 'react-toastify/dist/ReactToastify.css';
import Loader from '../Loader/Loader.jsx';
import { ToastContainer } from 'react-toastify';
import { refresh } from '../../redux/users/usersOperations.js';
import {
  selectToken,
  selectIsRefreshing,
} from '../../redux/users/usersSelectors.js';

import Header from '../Header/Header.jsx';
import PrivateRoute from '../PrivateRoute.jsx';
import RestrictedRoute from '../RestrictedRoute.jsx';
import Layout from '../Layout/Layout.jsx';
import MyFavoritePets from '../MyFavoritePets/MyFavoritePets.jsx';
import Viewed from '../Viewed/Viewed.jsx';

const MainPage = lazy(() => import('../../pages/MainPage/MainPage.jsx'));
const HomePage = lazy(() => import('../../pages/HomePage/HomePage.jsx'));
const NoticesPage = lazy(() =>
  import('../../pages/NoticesPage/NoticesPage.jsx')
);
const RegisterPage = lazy(() =>
  import('../../pages/RegisterPage/RegisterPage.jsx')
);
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage.jsx'));

const NewsPage = lazy(() => import('../../pages/NewsPage/NewsPage.jsx'));

const AddPetPage = lazy(() => import('../../pages/AddPetPage/AddPetPage.jsx'));

const ProfilePage = lazy(() =>
  import('../../pages/ProfilePage/ProfilePage.jsx')
);

const OurFriendsPage = lazy(() =>
  import('../../pages/OurFriendsPage/OurFriendsPage.jsx')
);

const NotFoundPage = lazy(() =>
  import('../../pages/NotFoundPage/NotFoundPage.jsx')
);

const App = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const currentToken = useSelector(selectToken);
  const isRefreshing = useSelector(selectIsRefreshing);
  const hiddenHeader = location.pathname == '/';

  useEffect(() => {
    if (!currentToken) return;
    dispatch(refresh());
  }, [currentToken, dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <>
      <Suspense fallback={<Loader />}>
        <Layout>
          {!hiddenHeader && <Header />}
          <Routes>
            <Route path="/" element={<MainPage hideHeader={true} />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/notices" element={<NoticesPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/our-friends" element={<OurFriendsPage />} />

            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/home"
                  component={<RegisterPage />}
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute redirectTo="/home" component={<LoginPage />} />
              }
            />

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
        </Layout>
      </Suspense>
      <ToastContainer />
    </>
  );
};

export default App;
