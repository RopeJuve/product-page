import './App.css'
import NavBar from "./components/Navbar/NavBar";
import ProductImage from "./components/ProductImage/ProductImage";
import ProductDescription from "./components/ProductDescription/ProductDescription";
import ProductImageDesktop from './components/ProductImageDesktop/ProductImageDesktop';

function App() {
  return (
    <>
      <NavBar />
      <div className='main-container'>
      <ProductImage />
      <ProductImageDesktop />
      <ProductDescription />
      </div>
    </>
  );
}

export default App;
