import { useReducer } from 'react';

const initialReview = { count: 0 };
const reviews = [
 {
  img: '/assets/img/winamp.webp',
  text: 'Все отлично',
  descr: 'Нуреев Александр, менеджер проекта Winamp Russian Community',
 },
 {
  img: '/assets/img/winamp.webp',
  text: 'Команда Drupal Coder вызвала только положительные впечатления!',
  descr: 'Полина, менеджер проекта Winamp Russian Community',
 },
 {
  img: '/assets/img/winamp.webp',
  text: 'Команда 3 рада плодотворному сотрудничеству!',
  descr: 'Вадим, менеджер проекта Winamp Russian Community',
 },
];
const revLen = reviews.length - 1;

const reducer = (state, action) => {
 switch (action) {
  case 'next':
   return { count: state.count < revLen ? state.count + 1 : 0 };
  case 'prev':
   return { count: state.count > 0 ? state.count - 1 : revLen };
 }
};

function Reviews() {
 const [state, dispatch] = useReducer(reducer, initialReview);

 return (
  <div className="reviews__box">
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
   <div className="reviews__nav">
    <button
     onClick={() => dispatch('prev')}
     className="reviews__nav-btn m-prev"
    ></button>
    <p className="reviews__nav-counter">
     {String(state.count + 1).padStart(2, '0')} <span>/ {reviews.length}</span>
    </p>
    <button
     onClick={() => dispatch('next')}
     className="reviews__nav-btn m-next"
    ></button>
   </div>
  </div>
 );
}

export default Reviews;
