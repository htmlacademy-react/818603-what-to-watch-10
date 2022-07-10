import MainScreen from '../../pages/main-screen/main-screen';
import { films } from '../../mocks/films';

const PromoFilm = {
  name: 'The Grand Budapest Hotel',
  genre: 'Drama',
  date: 2014
};

function App(): JSX.Element {
  return (
    <MainScreen
      films={films}
      promoFilm={PromoFilm}
    />
  );
}

export default App;
