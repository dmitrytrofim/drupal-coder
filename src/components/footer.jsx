function Footer() {
 return (
  <footer className="page__footer footer">
   <div className="container">
    <div className="footer__container container">
     <div className="footer__row">
      <div className="footer__info">
       <h2 className="footer__info-title title">
        Оставить заявку на поддержку сайта
       </h2>
       <p className="footer__info-subtitle">
        Срочно нужна поддержка сайта? Ваша команда не успевает справиться
        самостоятельно или предыдущий подрядчик не справился с работой? Тогда
        вам точно к нам! Просто оставьте заявку и наш менеджер с вами свяжется!
       </p>
       <address className="footer__info-address">
        <a href="#" className="footer__info-phone">
         8 800 222-26-73
        </a>
        <a href="#" className="footer__info-mail">
         info@drupal-coder.ru
        </a>
       </address>
      </div>
      <form className="footer__form" action="#">
       <div className="footer__form-group">
        <input
         className="footer__form-inp"
         type="text"
         name="name"
         placeholder="Ваше имя"
        />
        <input
         className="footer__form-inp"
         type="tel"
         name="tel"
         placeholder="Телефон"
        />
        <input
         className="footer__form-inp"
         type="email"
         name="email"
         placeholder="E-mail"
        />
        <textarea
         className="footer__form-inp m-area"
         name="text"
         placeholder="Ваш комментарий"
        ></textarea>
       </div>
       <label className="footer__form-check">
        <input
         className="footer__form-check-inp"
         type="checkbox"
         name="agree"
        />
        <span className="footer__form-check-text">
         Отправляя заявку, я даю согласие на обработку своих персональных данных
        </span>
       </label>
       <button className="footer__form-submit btn m-fill">
        Оставить заявку!
       </button>
      </form>
     </div>
     <p className="footer__descr">
      <span className="footer__descr-text">
       Проект ООО «Инитлаб», Краснодар, Россия.
      </span>
      <span className="footer__descr-text">
       Drupal является зарегистрированной торговой маркой Dries Buytaert.
      </span>
     </p>
    </div>
   </div>
  </footer>
 );
}

export default Footer;
