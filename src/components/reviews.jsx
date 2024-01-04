import { useReducer } from 'react';

const initialReview = { count: 1 };
const reviews = {
 1: {
  img: '/assets/img/winamp.png',
  text: 'Команда Drupal Coder вызвала только положительные впечатления!1',
  descr: 'Нуреев Александр, менеджер проекта Winamp Russian Community',
 },
 2: {
  img: '/assets/img/winamp.png',
  text: 'Команда Drupal Coder вызвала только положительные впечатления!2',
  descr: 'Нуреев Александр, менеджер проекта Winamp Russian Community',
 },
 3: {
  img: '/assets/img/winamp.png',
  text: 'Команда Drupal Coder вызвала только положительные впечатления!3',
  descr: 'Нуреев Александр, менеджер проекта Winamp Russian Community',
 },
};
const revLen = Object.keys(reviews).length;

const reducer = (state, action) => {
 switch (action.type) {
  case 'next':
   return { count: state.count < revLen ? state.count + 1 : 1 };
  case 'prev':
   return { count: state.count > 1 ? state.count - 1 : revLen };
 }
};

function Reviews() {
 const [state, dispatch] = useReducer(reducer, initialReview);

 return (
  <div className="reviews__box">
   <div className="reviews__body">
    <div className="reviews__card">
     <img
      className="reviews__card-img"
      src={reviews[state.count].img}
      alt=""
      loading="lazy"
     />
     <p className="reviews__card-text">{reviews[state.count].text}</p>
     <p className="reviews__card-descr">{reviews[state.count].descr}</p>
    </div>
   </div>
   <div className="reviews__nav">
    <button
     onClick={() => {
      dispatch({ type: 'prev' });
     }}
     className="reviews__nav-btn m-prev"
    >
     назад
    </button>
    <p className="reviews__nav-counter">{state.count}</p>
    <button
     onClick={() => {
      dispatch({ type: 'next' });
     }}
     className="reviews__nav-btn m-next"
    >
     вперед
    </button>
   </div>
  </div>
 );
}

export default Reviews;
