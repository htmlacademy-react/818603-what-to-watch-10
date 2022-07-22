import { Link, useNavigate } from 'react-router-dom';
import { Film } from '../../types/film';
import VideoPlayer from '../video-player/video-player';

type Props = {
  film: Film;
  active: boolean;
  setActiveCardId: (filmId: number | undefined) => void;
}

function FilmCard ({film, active, setActiveCardId}: Props): JSX.Element {

  const navigate = useNavigate();
  const handleArticleMouseEnter = () => setActiveCardId(film.id);
  const handleArticleMouseLeave = () => setActiveCardId(undefined);
  const handleArticleClick = () => navigate(`/films/${film.id}`);

  return (
    <article className="small-film-card catalog__films-card"
      onMouseEnter={handleArticleMouseEnter}
      onMouseLeave={handleArticleMouseLeave}
      onClick={handleArticleClick}
    >
      <div className="small-film-card__image">
        <VideoPlayer film={film} />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${film.id}`}>{film.name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
