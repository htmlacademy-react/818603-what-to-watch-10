import ReviewForm from '../../components/review-form/review-form';
import { useParams } from 'react-router-dom';
import { Film } from '../../types/film';

type Props = {
  films: Film[];
}

function AddReviewScreen({films}: Props) {
  const {id} = useParams();
  const film = films.find((item) => item.id === Number(id));
  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={(film) ? film.previewImage : ''} alt={(film) ? film.name : ''} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <a href="main.html" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a href="film-page.html" className="breadcrumbs__link">{(film) ? film.name : ''}</a>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link" href="/">Add review</a>
              </li>
            </ul>
          </nav>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link" href="/">Sign out</a>
            </li>
          </ul>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={(film) ? film.posterImage : ''} alt={(film) ? `${film.name} 'poster'` : ''} width="218" height="327" />
        </div>
      </div>

      <ReviewForm />

    </section>
  );
}

export default AddReviewScreen;
