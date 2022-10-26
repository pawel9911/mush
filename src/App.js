import './App.css';
import DetailedProduct from './componets/detailedProduct';
import Footer from './componets/footer';
import Header from './componets/header';
// import MainCarousel from './componets/mainCarousel';
// import Modal from './componets/modal';
// import Newsletter from './componets/newsletter';
// import ProductList from './componets/productList';

function App() {
  return (
    <div className="App">
      <Header />
      {/* Strona główna !!!!!!!!!!!!!!!!!!!!!!!!!!!*/}

      {/* <MainCarousel />
      <ProductList categoryTitle="Nowości"/>
      <ProductList categoryTitle="Nowości" />
      <Newsletter />
      <Modal /> */}

      <DetailedProduct/>

      <Footer />
    </div>
  );
}

export default App;
