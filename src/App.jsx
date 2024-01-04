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
   </main>
   <Footer />
  </div>
 );
}

export default App;
