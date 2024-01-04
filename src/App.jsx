import Header from './components/header';
import Footer from './components/footer';
import { Container } from './components/common';

function App() {
 return (
  <div className="wrapper">
   <Header />
   <main className="page__main main">
    <section className="">
     <Container>
      <div className=""></div>
     </Container>
    </section>
   </main>
   <Footer />
  </div>
 );
}

export default App;
