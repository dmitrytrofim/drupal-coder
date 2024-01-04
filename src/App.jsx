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
   </main>
   <Footer />
  </div>
 );
}

export default App;
