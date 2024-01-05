import LangSwitcher from './langSwitcher';

function Header() {
 return (
  <header className="page__header header">
   <div className="container">
    <div className="header__container">
     <a href="#" className="header__logo i-wrap">
      <img
       src="./assets/img/svg/logo.svg"
       alt=""
       className="header__logo-img i-full"
      />
     </a>
     <nav className="header__nav">
      <ul className="header__nav-list">
       <li className="header__nav-item">
        <a href="#" className="header__nav-link">
         Поддержка сайтов
        </a>
       </li>
       <li className="header__nav-item">
        <a href="#" className="header__nav-link">
         Тарифы
        </a>
       </li>
       <li className="header__nav-item">
        <a href="#" className="header__nav-link">
         Наши работы
        </a>
       </li>
       <li className="header__nav-item">
        <a href="#" className="header__nav-link">
         Отзывы
        </a>
       </li>
       <li className="header__nav-item">
        <a href="#" className="header__nav-link">
         Контакты
        </a>
       </li>
      </ul>
     </nav>
     <div className="header__group">
      <a href="tel:+78002222673" className="header__phone">
       8 800 222-26-73
      </a>
      <LangSwitcher />
     </div>
    </div>
   </div>
  </header>
 );
}

export default Header;
