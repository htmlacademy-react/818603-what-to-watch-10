import { reviews } from '../../mocks/reviews';
import { Review } from '../../types/review';

function FilmReviewsTab(): JSX.Element {
  const ReviewJSX = (data: Review) => (
    <div key={data.id} className="review">
      <blockquote className="review__quote">
        <p className="review__text">{data.comment}</p>
        <footer className="review__details">
          <cite className="review__author">{data.user.name}{data.id}</cite>
          <time className="review__date" dateTime="2016-12-20">{new Date(data.date).toLocaleString('en-us', { year:'numeric', month:'long', day:'numeric'})}</time>
        </footer>
      </blockquote>
      <div className="review__rating">{data.rating}</div>
    </div>
  );

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews.filter((i, index) => index % 2 === 0).map((item) => ReviewJSX(item))}
      </div>
      <div className="film-card__reviews-col">
        {reviews.filter((i, index) => index % 2 === 1).map((item) => ReviewJSX(item))}
      </div>
    </div>
  );
}

export default FilmReviewsTab;
