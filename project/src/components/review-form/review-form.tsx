import React from 'react';
import { useState, ChangeEvent } from 'react';

function ReviewForm(): JSX.Element {
  const [formData, setFormData] = useState({
    rating: '',
    comment: ''
  });

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>)=> {
    setFormData({...formData, rating: evt.target.value});
  };

  const handleTextareaChange = (evt: ChangeEvent<HTMLTextAreaElement>)=> {
    setFormData({...formData, comment: evt.target.value});
  };

  const inputs = Array.from({ length: 10 }, (_, i) => (
    <React.Fragment key={i}>
      <input onChange={handleInputChange} className="rating__input" id={`star-${i + 1}`} type="radio" name="rating" value={i + 1} />
      <label className="rating__label" htmlFor={`star-${i + 1}`}>{`Rating ${i + 1}`}</label>
    </ React.Fragment>
  )).reverse();

  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
        <div className="rating">
          <div className="rating__stars">
            {inputs}
          </div>
        </div>
        <div className="add-review__text">
          <textarea onChange={handleTextareaChange} value={formData.comment} className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"></textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ReviewForm;
