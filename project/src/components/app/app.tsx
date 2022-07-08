import MainScreen from '../../pages/main-screen/main-screen';
import { films } from "../../mocks/films";

function App(): JSX.Element {
  return (
    <MainScreen films={films} />
  );
}

export default App;
