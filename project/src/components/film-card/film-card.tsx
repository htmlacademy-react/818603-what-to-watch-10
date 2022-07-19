import { Link } from 'react-router-dom';
import { Film } from '../../types/film';

type Props = {
  film: Film;
  active: boolean;
  setActiveCardId: (filmId: number | undefined) => void;
}

function FilmCard ({film, active, setActiveCardId}: Props): JSX.Element {

  const handleArticleMouseEnter = () => setActiveCardId(film.id);
  const handleArticleMouseLeave = () => setActiveCardId(undefined);

  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={handleArticleMouseEnter} onMouseLeave={handleArticleMouseLeave}>
      <div className="small-film-card__image">
        <img src={film.previewImage} alt={film.name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${film.id}`}>{film.name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
