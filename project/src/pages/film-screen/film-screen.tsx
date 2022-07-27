import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Film } from '../../types/film';
import Footer from '../../components/footer/footer';
import FilmOverviewsTab from '../../components/film-overviews-tab/film-overviews-tab';
import FilmDetailsTab from '../../components/film-details-tab/film-details-tab';
import FilmReviewsTab from '../../components/film-reviews-tab/film-reviews-tab';
import MoreLikeFilms from '../../components/more-like-films/more-like-films';


type Props = {
  films: Film[];
}

enum Tabs {
  Overviews,
  Details,
  Reviews
}

function FilmScreen({films}: Props) {
  const {id} = useParams();
  const [activeTab, setActiveTab] = useState<Tabs>(Tabs.Overviews);

  const film = films.find((item) => item.id === Number(id));
  const moreLikeFilms = films.filter((item) => {
    if(film && film !== item) {
      return item.genre === film.genre;
    }
    return false;
  }).slice(0, 4);

  if(!film) {
    return (
      <div>Loading</div>
    );
  }

  const openOverviewsTab = () => setActiveTab(Tabs.Overviews);
  const openDetailsTab = () => setActiveTab(Tabs.Details);
  const openReviewsTab = () => setActiveTab(Tabs.Reviews);

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={film.name } />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <div className="logo">
              <Link to={AppRoute.Root}className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>

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

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
                <Link to={`/films/${film.id}/review`} className="btn film-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film.posterImage} alt={`${film.name} 'poster'`} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li onClick={openOverviewsTab} className={(activeTab === Tabs.Overviews) ? 'film-nav__item film-nav__item--active' : 'film-nav__item'} style={{cursor:'pointer'}}>
                    <span className="film-nav__link">Overviews</span>
                  </li>
                  <li onClick={openDetailsTab} className={(activeTab === Tabs.Details) ? 'film-nav__item film-nav__item--active' : 'film-nav__item'} style={{cursor:'pointer'}}>
                    <span className="film-nav__link">Details</span>
                  </li>
                  <li onClick={openReviewsTab} className={(activeTab === Tabs.Reviews) ? 'film-nav__item film-nav__item--active' : 'film-nav__item'} style={{cursor:'pointer'}}>
                    <span className="film-nav__link">Reviews</span>
                  </li>
                </ul>
              </nav>
              {activeTab === Tabs.Overviews && <FilmOverviewsTab film={film} />}
              {activeTab === Tabs.Details && <FilmDetailsTab film={film} />}
              {activeTab === Tabs.Reviews && <FilmReviewsTab />}
            </div>
          </div>

        </div>
      </section>

      <div className="page-content">
        <MoreLikeFilms moreLikeFilms={moreLikeFilms} />
        <Footer />
      </div>
    </>
  );
}

export default FilmScreen;
