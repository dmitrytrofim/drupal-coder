import Header from './components/header';
import Footer from './components/footer';

function App() {
 return (
  <div className="wrapper">
   <Header />
   <main className="page__main main">
    <section className="main__greet greet">
     <div className="container">
      <div className="greet__container">
       <div className="greet__info">
        <h1 className="greet__info-title"></h1>
        <p className="greet__info-subtitle"></p>
        <a href="#" className="greet__info-btn"></a>
       </div>
       <ul className="greet__list">
        <li className="greet__list-item">
         <p className="greet__list-title m-cup">#1</p>
         <p className="greet__list-descr">
          Drupal-разработчик в России по версии Рейтинга Рунета
         </p>
        </li>
        <li className="greet__list-item">
         <p className="greet__list-title">3+</p>
         <p className="greet__list-descr">
          средний опыт специалистов более 3 лет
         </p>
        </li>
        <li className="greet__list-item">
         <p className="greet__list-title">14</p>
         <p className="greet__list-descr">14 лет опыта в сфере Drupal</p>
        </li>
        <li className="greet__list-item">
         <p className="greet__list-title">200+</p>
         <p className="greet__list-descr">модулей и тем в формате DrupalGive</p>
        </li>
        <li className="greet__list-item">
         <p className="greet__list-title">35 000</p>
         <p className="greet__list-descr">часов поддержки сайтов на Drupal</p>
        </li>
        <li className="greet__list-item">
         <p className="greet__list-title">200+</p>
         <p className="greet__list-descr">200+ Проектов на поддержке</p>
        </li>
       </ul>
      </div>
     </div>
    </section>
    <section className="main__services services">
     <div className="container">
      <div className="services__container">
       <h2 className="services__title">
        13 лет совершенствуем компетенции в Drupal поддержке!
       </h2>
       <p className="services__subtitle">
        Разрабатываем и оптимизируем модули, расширяем функциональность сайтов,
        обновляем дизайн
       </p>
       <ul className="services__list">
        <li className="services__item">
         <div className="services__item-visual i-wrap">
          <img
           className="services__item-img i-full"
           src="/assets/img/svg/services-1.svg"
           alt=""
           loading="lazy"
          />
         </div>
         <p className="services__item-text">
          Добавление информации на сайт, создание новых разделов
         </p>
        </li>
        <li className="services__item">
         <div className="services__item-visual i-wrap">
          <img
           className="services__item-img i-full"
           src="/assets/img/svg/services-2.svg"
           alt=""
           loading="lazy"
          />
         </div>
         <p className="services__item-text">
          Разработка и оптимизация модулей сайта
         </p>
        </li>
        <li className="services__item">
         <div className="services__item-visual i-wrap">
          <img
           className="services__item-img i-full"
           src="/assets/img/svg/services-3.svg"
           alt=""
           loading="lazy"
          />
         </div>
         <p className="services__item-text">
          Интеграция с CRM, 1C, платежными системами, любыми веб-сервисами
         </p>
        </li>
        <li className="services__item">
         <div className="services__item-visual i-wrap">
          <img
           className="services__item-img i-full"
           src="/assets/img/svg/services-4.svg"
           alt=""
           loading="lazy"
          />
         </div>
         <p className="services__item-text">
          Любые доработки функционала и дизайна
         </p>
        </li>
        <li className="services__item">
         <div className="services__item-visual i-wrap">
          <img
           className="services__item-img i-full"
           src="/assets/img/svg/services-5.svg"
           alt=""
           loading="lazy"
          />
         </div>
         <p className="services__item-text">
          Аудит и мониторинг безопасности Drupal сайтов
         </p>
        </li>
        <li className="services__item">
         <div className="services__item-visual i-wrap">
          <img
           className="services__item-img i-full"
           src="/assets/img/svg/services-6.svg"
           alt=""
           loading="lazy"
          />
         </div>
         <p className="services__item-text">
          Миграция, импорт контента и апгрейд Drupal
         </p>
        </li>
        <li className="services__item">
         <div className="services__item-visual i-wrap">
          <img
           className="services__item-img i-full"
           src="/assets/img/svg/services-7.svg"
           alt=""
           loading="lazy"
          />
         </div>
         <p className="services__item-text">
          Оптимизация и ускорение Drupal-сайтов
         </p>
        </li>
        <li className="services__item">
         <div className="services__item-visual i-wrap">
          <img
           className="services__item-img i-full"
           src="/assets/img/svg/services-8.svg"
           alt=""
           loading="lazy"
          />
         </div>
         <p className="services__item-text">
          Веб-маркетинг, консультации и работы по SEO
         </p>
        </li>
       </ul>
      </div>
     </div>
    </section>
   </main>
   <Footer />
  </div>
 );
}

export default App;
