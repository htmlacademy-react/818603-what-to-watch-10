import FilmCard from '../../components/film-card/film-card';
import { Film } from '../../types/film';
import { useState } from 'react';

type Props = {
  films: Film[];
}

function FilmList({films}: Props) {
  const [activeCardId, setActiveCardId] = useState<number | undefined>();

  return (
    <div className="catalog__films-list">
      {films.map((item) => (
        <FilmCard key={item.id} film={item} setActiveCardId={setActiveCardId} active={item.id === activeCardId} />
      ))}
    </div>
  );
}

export default FilmList;
