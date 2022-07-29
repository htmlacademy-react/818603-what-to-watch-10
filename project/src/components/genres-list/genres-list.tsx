import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeGenre } from '../../store/action';

function GenresList(): JSX.Element {
  const dispatch = useAppDispatch();
  const films = useAppSelector((state) => state.films);
  const genre = useAppSelector((state) => state.genre);
  const genres = new Set(['All genres']);
  films.map((item) => genres.add(item.genre));
  const filteredGenres = [...genres];

  const handleLiClick = (evt: React.MouseEvent<HTMLLIElement>) => {
    if(evt.currentTarget.dataset.tab) {
      dispatch(changeGenre({genre: evt.currentTarget.dataset.tab}));
    }
  };

  return (
    <ul className="catalog__genres-list">
      {filteredGenres.map((item) => (
        <li key={item} onClick={handleLiClick} data-tab={item}
          className={item === genre ? 'catalog__genres-item catalog__genres-item--active' : 'catalog__genres-item'} style={{cursor:'pointer'}}
        >
          <span className="catalog__genres-link">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default GenresList;
