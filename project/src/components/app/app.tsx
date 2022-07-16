import { AppRoute, AuthorizationStatus } from '../../const';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { PROMO_FILM } from '../../const';
import MainScreen from '../../pages/main-screen/main-screen';
import AddReview from '../../pages/add-review/add-review';
import Film from '../../pages/film/film';
import MyList from '../../pages/my-list/my-list';
import Player from '../../pages/player/player';
import SignIn from '../../pages/sign-in/sign-in';
import PageNotFound from '../../pages/page-not-found/page-not-found';
import PrivateRoute from '../private-route/private-route';
import { FilmType } from '../../types/film-type';

type AppProps = {
  films: FilmType[];
}

function App({films}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path = {AppRoute.Root}
          element = {<MainScreen films={films} promoFilm={PROMO_FILM} />}
        />
        <Route
          path = {AppRoute.Review}
          element = {<AddReview />}
        />
        <Route
          path = {AppRoute.Film}
          element = {<Film />}
        />
        <Route
          path = {AppRoute.List}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <MyList films={films}/>
            </PrivateRoute>
          }
        />
        <Route
          path = {AppRoute.Player}
          element = {<Player />}
        />
        <Route
          path = {AppRoute.Login}
          element = {<SignIn />}
        />
        <Route
          path = {'*'}
          element = {<PageNotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
