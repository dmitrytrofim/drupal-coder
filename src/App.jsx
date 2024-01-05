import Header from './components/header';
import Footer from './components/footer';
import Reviews from './components/reviews';

function App() {
 return (
  <div className="wrapper">
   <Header />
   <main className="page__main main">
    <section className="main__greet greet">
     <div className="container">
      <div className="greet__container">
       <div className="greet__info">
        <h1 className="greet__info-title">Поддержка сайтов на Drupal</h1>
        <p className="greet__info-subtitle">
         Сопровождение и поддержка сайтов
         <br /> на CMS Drupal любых версий и запущенности
        </p>
        <a href="#" className="greet__info-btn btn">
         Тарифы
        </a>
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
    <section className="main__support support">
     <div className="container">
      <div className="support__container">
       <h2 className="support__title"></h2>
       <ul className="support__list">
        <li className="support__item m-1">
         <p className="support__item-num">01.</p>
         <h3 className="support__item-title">Постановка задачи по Email</h3>
         <p className="support__item-text">
          Удобная и привычная модель постановки задач, при которой задачи
          фиксируются и никогда не теряются.
         </p>
        </li>
        <li className="support__item m-2">
         <p className="support__item-num">02.</p>
         <h3 className="support__item-title">
          Система Helpdesk – отчетность, прозрачность
         </h3>
         <p className="support__item-text">
          Возможность посмотреть все заявки в работе и отработанные часы в
          личном кабинете через браузер.
         </p>
        </li>
        <li className="support__item m-3">
         <p className="support__item-num">03.</p>
         <h3 className="support__item-title">
          Расширенная техническая поддержка
         </h3>
         <p className="support__item-text">
          Возможность организации расширенной техподдержки с 6:00 до 22:00 без
          выходных.
         </p>
        </li>
        <li className="support__item m-4">
         <p className="support__item-num">04.</p>
         <h3 className="support__item-title">Персональный менеджер проекта</h3>
         <p className="support__item-text">
          Ваш менеджер проекта всегда в курсе текущего состояния проекта и в
          любой момент готов ответить на любые вопросы.
         </p>
        </li>
        <li className="support__item m-5">
         <p className="support__item-num">05.</p>
         <h3 className="support__item-title">Удобные способы оплаты</h3>
         <p className="support__item-text">
          Безналичный расчет по договору или электронные деньги: WebMoney,
          Яндекс.Деньги, Paypal.
         </p>
        </li>
        <li className="support__item m-6">
         <p className="support__item-num">06.</p>
         <h3 className="support__item-title">Работаем с SLA и NDA</h3>
         <p className="support__item-text">
          Работа в рамках соглашений о конфиденциальности и об уровне качетсва
          работ.
         </p>
        </li>
        <li className="support__item m-7">
         <p className="support__item-num">07.</p>
         <h3 className="support__item-title">Штатные специалисты</h3>
         <p className="support__item-text">
          Надежные штатные специалисты, никаких фрилансеров.
         </p>
        </li>
        <li className="support__item m-8">
         <p className="support__item-num">08.</p>
         <h3 className="support__item-title">Удобные каналы связи</h3>
         <p className="support__item-text">
          Консультации по телефону, скайпу, в месенджерах.
         </p>
        </li>
       </ul>
      </div>
     </div>
    </section>
    <section className="main__exp exp">
     <div className="container">
      <div className="exp__container">
       <div className="exp__info">
        <h2 className="exp__title">Экспертиза в Drupal, опыт 14 лет!</h2>
        <div className="exp__row">
         <p className="exp__item">
          Только системный подход – контроль версий, резервирование и
          тестирование!
         </p>
         <p className="exp__item">
          Только Drupal сайты, не берем на поддержку сайты на других CMS!
         </p>
        </div>
       </div>
      </div>
     </div>
     <img
      className="exp__decor"
      src="/assets/img/svg/laptop.svg"
      alt=""
      loading="lazy"
     />
    </section>
    <section className="main__tariffs tariffs">
     <div className="container">
      <div className="tariffs__container">
       <h2 className="tariffs__title">Тарифы</h2>
       <div className="tariffs__box">
        <div className="tariffs__card">
         <div className="tariffs__card-head">
          <p className="tariffs__card-name">Стартовый</p>
          <p className="tariffs__card-cost">
           2000 <i>₽</i>
          </p>
          <p className="tariffs__card-descr">в час</p>
         </div>
         <hr className="tariffs__card-line" />
         <ul className="tariffs__card-list">
          <li className="tariffs__card-item">Предоплата от 2 часов</li>
          <li className="tariffs__card-item">Консультации и работы по SEO</li>
          <li className="tariffs__card-item">Услуги дизайнера</li>
          <li className="tariffs__card-item">Стандартное время реакции</li>
          <li className="tariffs__card-item">
           Неиспользованные оплаченные часы переносятся на следующий месяц
          </li>
         </ul>
         <a href="#" className="tariffs__card-btn">
          Оставить заявку!
         </a>
        </div>
        <div className="tariffs__card">
         <div className="tariffs__card-head">
          <p className="tariffs__card-name">Бизнес</p>
          <p className="tariffs__card-cost">
           2000 <i>₽</i>
          </p>
          <p className="tariffs__card-descr">в час</p>
         </div>
         <hr className="tariffs__card-line" />
         <ul className="tariffs__card-list">
          <li className="tariffs__card-item">Предоплата от 10 часов</li>
          <li className="tariffs__card-item">Консультации и работы по SEO</li>
          <li className="tariffs__card-item">Услуги дизайнера</li>
          <li className="tariffs__card-item">
           Высокое время реакции – до 2 рабочих дней
          </li>
          <li className="tariffs__card-item">
           Неиспользованные часы не переносятся
          </li>
         </ul>
         <a href="#" className="tariffs__card-btn">
          Оставить заявку!
         </a>
        </div>
        <div className="tariffs__card">
         <div className="tariffs__card-head">
          <p className="tariffs__card-name">VIP</p>
          <p className="tariffs__card-cost">
           1800 <i>₽</i>
          </p>
          <p className="tariffs__card-descr">в час</p>
         </div>
         <hr className="tariffs__card-line" />
         <ul className="tariffs__card-list">
          <li className="tariffs__card-item">Предоплата от 100 часов</li>
          <li className="tariffs__card-item">Консультации и работы по SEO</li>
          <li className="tariffs__card-item">Услуги дизайнера</li>
          <li className="tariffs__card-item">
           Максимальное время реакции – в день обращения
          </li>
          <li className="tariffs__card-item">
           Неиспользованные часы не переносятся
          </li>
         </ul>
         <a href="#" className="tariffs__card-btn">
          Оставить заявку!
         </a>
        </div>
       </div>
       <p className="tariffs__descr">
        Вам не подходят наши тарифы? Оставьте заявку и мы предложим вам
        индивидуальные условия!
       </p>
       <a href="#" className="tariffs__link">
        Получить индивидуальный тариф
       </a>
      </div>
     </div>
    </section>
    <section className="main__cases cases">
     <div className="container">
      <div className="cases__container">
       <h2 className="cases__title">Последние кейсы</h2>
       <div className="cases__box">
        <a href="#" className="cases__card m-sep">
         <img
          className="cases__card-visual"
          src="/assets/img/case-5.webp"
          alt=""
          loading="lazy"
         />
         <div className="cases__card-info">
          <p className="cases__card-title">
           Настройка выгрузки YML для Яндекс.Маркета
          </p>
          <p className="cases__card-date">22.04.2019</p>
          <p className="cases__card-text">
           Эти слова совершенно справедливы, однако гипнотический рифф
           продолжает паузный пласт.
          </p>
         </div>
        </a>
        <a href="#" className="cases__card m-sep">
         <img
          className="cases__card-visual"
          src="/assets/img/case-7.webp"
          alt=""
          loading="lazy"
         />
         <div className="cases__card-info">
          <p className="cases__card-title">
           Настройка выгрузки YML для Яндекс.Маркета
          </p>
         </div>
        </a>
        <a href="#" className="cases__card m-sep">
         <img
          className="cases__card-visual"
          src="/assets/img/case-4.webp"
          alt=""
          loading="lazy"
         />
         <div className="cases__card-info">
          <p className="cases__card-title">
           Настройка выгрузки YML для Яндекс.Маркета
          </p>
          <p className="cases__card-date">22.04.2019</p>
         </div>
        </a>
        <a href="#" className="cases__card m-sep">
         <img
          className="cases__card-visual"
          src="/assets/img/case-3.webp"
          alt=""
          loading="lazy"
         />
         <div className="cases__card-info">
          <p className="cases__card-title">
           Настройка выгрузки YML для Яндекс.Маркета
          </p>
          <p className="cases__card-date">22.04.2019</p>
         </div>
        </a>
        <a href="#" className="cases__card m-sep">
         <img
          className="cases__card-visual"
          src="/assets/img/case-1.webp"
          alt=""
          loading="lazy"
         />
         <div className="cases__card-info">
          <p className="cases__card-title">
           Настройка выгрузки YML для Яндекс.Маркета
          </p>
          <p className="cases__card-date">22.04.2019</p>
          <p className="cases__card-text">
           Эти слова совершенно справедливы, однако гипнотический рифф
           продолжает паузный пласт.
          </p>
         </div>
        </a>
        <a href="#" className="cases__card m-sep">
         <img
          className="cases__card-visual"
          src="/assets/img/case-6.webp"
          alt=""
          loading="lazy"
         />
         <div className="cases__card-info">
          <p className="cases__card-title">
           Настройка выгрузки YML для Яндекс.Маркета
          </p>
         </div>
        </a>
        <a href="#" className="cases__card m-sep">
         <img
          className="cases__card-visual"
          src="/assets/img/case-2.webp"
          alt=""
          loading="lazy"
         />
         <div className="cases__card-info">
          <p className="cases__card-title">
           Настройка выгрузки YML для Яндекс.Маркета
          </p>
          <p className="cases__card-date">22.04.2019</p>
         </div>
        </a>
       </div>
       <a href="#" className="cases__more"></a>
      </div>
     </div>
    </section>
    <section className="main__team team">
     <div className="container">
      <div className="team__container">
       <h2 className="team__title"></h2>
       <ul className="team__list">
        <li className="team__item">
         <div className="team__item-visual i-wrap">
          <img
           className="team__item-img i-full"
           src="/assets/img/team-1.webp"
           alt=""
           loading="lazy"
          />
         </div>
         <p className="team__item-name">Лёша</p>
         <p className="team__item-post">
          руководитель поддержки, планирование задач
         </p>
        </li>
        <li className="team__item">
         <div className="team__item-visual i-wrap">
          <img
           className="team__item-img i-full"
           src="/assets/img/team-2.webp"
           alt=""
           loading="lazy"
          />
         </div>
         <p className="team__item-name">Роман</p>
         <p className="team__item-post">Роман</p>
        </li>
        <li className="team__item">
         <div className="team__item-visual i-wrap">
          <img
           className="team__item-img i-full"
           src="/assets/img/team-3.webp"
           alt=""
           loading="lazy"
          />
         </div>
         <p className="team__item-name">Ирина</p>
         <p className="team__item-post">
          менеджер по работе с клинетами, организация оказания услуг
         </p>
        </li>
        <li className="team__item">
         <div className="team__item-visual i-wrap">
          <img
           className="team__item-img i-full"
           src="/assets/img/team-1.webp"
           alt=""
           loading="lazy"
          />
         </div>
         <p className="team__item-name">Даша</p>
         <p className="team__item-post">SEO, веб-маркетинг</p>
        </li>
        <li className="team__item">
         <div className="team__item-visual i-wrap">
          <img
           className="team__item-img i-full"
           src="/assets/img/team-2.webp"
           alt=""
           loading="lazy"
          />
         </div>
         <p className="team__item-name">Сергей</p>
         <p className="team__item-post">
          технический директор, 14 лет опыт работы с Drupal
         </p>
        </li>
        <li className="team__item">
         <div className="team__item-visual i-wrap">
          <img
           className="team__item-img i-full"
           src="/assets/img/team-3.webp"
           alt=""
           loading="lazy"
          />
         </div>
         <p className="team__item-name">Вадим</p>
         <p className="team__item-post">UX/UI дизайн</p>
        </li>
       </ul>
      </div>
     </div>
    </section>
    <section className="main__reviews reviews">
     <div className="container">
      <div className="reviews__container">
       <h2 className="reviews__title">Отзывы</h2>
       <Reviews />
      </div>
     </div>
    </section>
    <section className="main__partners partners">
     <div className="container">
      <div className="partners__container">
       <h2 className="partners__title">С нами работают</h2>
       <p className="partners__subtitle">
        Десятки компаний доверяют нам самое ценное, что у них есть в интернете –
        свои сайты. Мы делаем всё, чтобы наше сотрудничество было долгим.
       </p>
       <div className="partners__box">
        <div className="partners__row">
         <div className="partners__card">
          <img
           className="partners__card-img"
           src="/assets/img/partner-1.webp"
           alt=""
           loading="lazy"
          />
         </div>
        </div>
       </div>
      </div>
     </div>
    </section>
   </main>
   <Footer />
  </div>
 );
}

export default App;
