import { useReducer } from 'react';

const initialReview = { count: 0 };
const reviews = [
 {
  img: '/assets/img/winamp.png',
  text: 'Команда 1 Drupal Coder вызвала только положительные впечатления!',
  descr: 'Нуреев Александр, менеджер проекта Winamp Russian Community',
 },
 {
  img: '/assets/img/winamp.png',
  text: 'Команда 2 Drupal Coder вызвала только положительные впечатления!',
  descr: 'Нуреев Александр, менеджер проекта Winamp Russian Community',
 },
 {
  img: '/assets/img/winamp.png',
  text: 'Команда 3 Drupal Coder вызвала только положительные впечатления!',
  descr: 'Нуреев Александр, менеджер проекта Winamp Russian Community',
 },
 {
  img: '/assets/img/winamp.png',
  text: 'Команда 4 Drupal Coder вызвала только положительные впечатления!',
  descr: 'Нуреев Александр, менеджер проекта Winamp Russian Community',
 },
 {
  img: '/assets/img/winamp.png',
  text: 'Команда 5 Drupal Coder вызвала только положительные впечатления!',
  descr: 'Нуреев Александр, менеджер проекта Winamp Russian Community',
 },
 {
  img: '/assets/img/winamp.png',
  text: 'Команда 6 Drupal Coder вызвала только положительные впечатления!',
  descr: 'Нуреев Александр, менеджер проекта Winamp Russian Community',
 },
 {
  img: '/assets/img/winamp.png',
  text: 'Команда 7 Drupal Coder вызвала только положительные впечатления!',
  descr: 'Нуреев Александр, менеджер проекта Winamp Russian Community',
 },
 {
  img: '/assets/img/winamp.png',
  text: 'Команда 8 Drupal Coder вызвала только положительные впечатления!',
  descr: 'Нуреев Александр, менеджер проекта Winamp Russian Community',
 },
 {
  img: '/assets/img/winamp.png',
  text: 'Команда 9 Drupal Coder вызвала только положительные впечатления!',
  descr: 'Нуреев Александр, менеджер проекта Winamp Russian Community',
 },
 {
  img: '/assets/img/winamp.png',
  text: 'Команда 10 Drupal Coder вызвала только положительные впечатления!',
  descr: 'Нуреев Александр, менеджер проекта Winamp Russian Community',
 },
 {
  img: '/assets/img/winamp.png',
  text: 'Команда 11 Drupal Coder вызвала только положительные впечатления!',
  descr: 'Нуреев Александр, менеджер проекта Winamp Russian Community',
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
    >
     назад
    </button>
    <p className="reviews__nav-counter">
     {String(state.count + 1).padStart(2, '0')} / <span>{reviews.length}</span>
    </p>
    <button
     onClick={() => dispatch('next')}
     className="reviews__nav-btn m-next"
    >
     вперед
    </button>
   </div>
  </div>
 );
}

export default Reviews;
