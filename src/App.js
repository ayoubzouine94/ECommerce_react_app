import HomePages from "./pages/home/HomePages";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import NavbarLogin from './components/utility/NavbarLogin';
import Footer from './components/utility/Footer';
import LoginPage from "./pages/auth/LoginPage";
import Registre from "./pages/auth/Registre";
import AllCategoryPage from "./pages/category/AllCategoryPage";
import AllBrandPage from "./pages/brand/AllBrandPage";
import ShopProductsPage from "./pages/products/ShopProductsPage";
import ProductDetailsPage from "./pages/products/ProductDetailsPage";
import CartPage from "./pages/cart/CartPage";
import ChoosePayMethodPage from "./pages/payment/ChoosePayMethodPage";
import AdminAllProductPage from "./pages/admin/AdminAllProductPage";
import AdminAllOrdersPage from "./pages/admin/AdminAllOrdersPage";



function App() {
  return (
    <div className="font">
      <NavbarLogin />
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<HomePages />} />
          <Route  path="/login" element={<LoginPage />} />
          <Route  path="/register" element={<Registre />} />
          <Route  path="/allcategories" element={<AllCategoryPage />} />
          <Route  path="/allbrand" element={<AllBrandPage />} />
          <Route  path="/products" element={<ShopProductsPage />} />
          <Route  path="/product/:id" element={<ProductDetailsPage />} />
          <Route  path="/cart" element={<CartPage />} />
          <Route  path="/order/paymethoud" element={<ChoosePayMethodPage />} />
          <Route  path="/admin/allproducts" element={<AdminAllProductPage />} />
          <Route  path="/admin/allorders" element={<AdminAllOrdersPage />} />


          

          
        </Routes>
      
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
