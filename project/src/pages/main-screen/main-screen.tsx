import FilmCard from '../../components/film-card/film-card';

type FilmsInfo = {
  name: string;
  previewImage: string;
}[];

const filmsInfo: FilmsInfo = [
  {
    name: 'Fantastic Beasts: The Crimes of Grindelwald',
    previewImage: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg'
  },
  {
    name: 'Bohemian Rhapsody',
    previewImage: 'img/bohemian-rhapsody.jpg'
  },
  {
    name: 'Macbeth',
    previewImage: 'img/macbeth.jpg'
  },
  {
    name: 'Aviator',
    previewImage: 'img/aviator.jpg'
  },
  {
    name: 'We need to talk about Kevin',
    previewImage: 'img/we-need-to-talk-about-kevin.jpg'
  },
  {
    name: 'What We Do in the Shadows',
    previewImage: 'img/what-we-do-in-the-shadows.jpg'
  },
  {
    name: 'Revenant',
    previewImage: 'img/revenant.jpg'
  },
  {
    name: 'Johnny English',
    previewImage: 'img/johnny-english.jpg'
  },
  {
    name: 'Shutter Island',
    previewImage: 'img/shutter-island.jpg'
  },
  {
    name: 'Pulp Fiction',
    previewImage: 'img/pulp-fiction.jpg'
  },
  {
    name: 'No Country for Old Men',
    previewImage: 'img/no-country-for-old-men.jpg'
  },
  {
    name: 'Snatch',
    previewImage: 'img/snatch.jpg'
  },
  {
    name: 'Moonrise Kingdom',
    previewImage: 'img/moonrise-kingdom.jpg'
  },
  {
    name: 'Seven Years in Tibet',
    previewImage: 'img/seven-years-in-tibet.jpg'
  },
  {
    name: 'Midnight Special',
    previewImage: 'img/midnight-special.jpg'
  },
  {
    name: 'War of the Worlds',
    previewImage: 'img/war-of-the-worlds.jpg'
  },
  {
    name: 'Dardjeeling Limited',
    previewImage: 'img/dardjeeling-limited.jpg'
  },
  {
    name: 'Orlando',
    previewImage: 'img/orlando.jpg'
  },
  {
    name: 'Mindhunter',
    previewImage: 'img/mindhunter.jpg'
  },
  {
    name: 'Midnight Special',
    previewImage: 'img/midnight-special.jpg'
  }
];


function MainScreen (): JSX.Element {
    return (
      <>
        <section className="film-card">
          <div className="film-card__bg">
            <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <div className="logo">
              <a className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <ul className="user-block">
              <li className="user-block__item">
                <div className="user-block__avatar">
                  <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
                </div>
              </li>
              <li className="user-block__item">
                <a className="user-block__link">Sign out</a>
              </li>
            </ul>
          </header>

          <div className="film-card__wrap">
            <div className="film-card__info">
              <div className="film-card__poster">
                <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
              </div>

              <div className="film-card__desc">
                <h2 className="film-card__title">The Grand Budapest Hotel</h2>
                <p className="film-card__meta">
                  <span className="film-card__genre">Drama</span>
                  <span className="film-card__year">2014</span>
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
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="page-content">
          <section className="catalog">
            <h2 className="catalog__title visually-hidden">Catalog</h2>

            <ul className="catalog__genres-list">
              <li className="catalog__genres-item catalog__genres-item--active">
                <a href="#" className="catalog__genres-link">All genres</a>
              </li>
              <li className="catalog__genres-item">
                <a href="#" className="catalog__genres-link">Comedies</a>
              </li>
              <li className="catalog__genres-item">
                <a href="#" className="catalog__genres-link">Crime</a>
              </li>
              <li className="catalog__genres-item">
                <a href="#" className="catalog__genres-link">Documentary</a>
              </li>
              <li className="catalog__genres-item">
                <a href="#" className="catalog__genres-link">Dramas</a>
              </li>
              <li className="catalog__genres-item">
                <a href="#" className="catalog__genres-link">Horror</a>
              </li>
              <li className="catalog__genres-item">
                <a href="#" className="catalog__genres-link">Kids & Family</a>
              </li>
              <li className="catalog__genres-item">
                <a href="#" className="catalog__genres-link">Romance</a>
              </li>
              <li className="catalog__genres-item">
                <a href="#" className="catalog__genres-link">Sci-Fi</a>
              </li>
              <li className="catalog__genres-item">
                <a href="#" className="catalog__genres-link">Thrillers</a>
              </li>
            </ul>

            <div className="catalog__films-list">
              <FilmCard filmsInfo = {filmsInfo} />
            </div>

            <div className="catalog__more">
              <button className="catalog__button" type="button">Show more</button>
            </div>
          </section>

          <footer className="page-footer">
            <div className="logo">
              <a className="logo__link logo__link--light">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <div className="copyright">
              <p>© 2019 What to watch Ltd.</p>
            </div>
          </footer>
        </div>
      </>
    );
}

export default MainScreen