import FilmCard from '../film-card/film-card';

import { Film } from '../../types/film';

type Props = {
  moreLikeFilms: Film[];
}

function MoreLikeFilms({moreLikeFilms}: Props) {
  return (
    <div className="catalog__films-list">
      {moreLikeFilms.map((item) => (
        <FilmCard key={item.id} film={item} />
      ))}
    </div>
  );
}

export default MoreLikeFilms;
