import { films } from '../../mocks/films';
import { AuthorizationStatus } from '../../const';
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

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path = {'/'}
          element = {<MainScreen films={films} promoFilm={PROMO_FILM} />}
        />
        <Route
          path = {'/films/:id/review'}
          element = {<AddReview />}
        />
        <Route
          path = {'/films/:id'}
          element = {<Film />}
        />
        <Route
          path = {'/mylist'}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <MyList />
            </PrivateRoute>
          }
        />
        <Route
          path = {'/player/:id'}
          element = {<Player />}
        />
        <Route
          path = {'/login'}
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
