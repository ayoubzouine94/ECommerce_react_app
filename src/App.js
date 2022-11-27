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
import AdminOrdersDetailsPage from "./pages/admin/AdminOrdersDetailsPage";

import AdminAddBrandPage from "./pages/admin/AdminAddBrandPage";
import AdminAddCategoryPage from "./pages/admin/AdminAddCategoryPage";

import AddSubCategoriePage from "./pages/admin/AddSubCategoriePage";
import AdminAddProductPage from "./pages/admin/AdminAddProductPage";
import UserAllOrdersPage from "./pages/user/UserAllOrdersPage";
import UserFavoriteProdutsPage from "./pages/user/UserFavoriteProdutsPage";
import UserAdressePage from "./pages/user/UserAdressePage";
import UserAddAdressPage from "./pages/user/UserAddAdressPage";
import UserEditAdressPage from "./pages/user/UserEditAdressPage";
import UserProfilePage from "./pages/user/UserProfilePage";

const App = () =>{
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
          <Route  path="/admin/orders/:id" element={<AdminOrdersDetailsPage />} />
          <Route  path="/admin/addbrand" element={<AdminAddBrandPage />} />
          <Route  path="/admin/addcategory" element={<AdminAddCategoryPage />} />
          <Route  path="/admin/addsubcategory" element={<AddSubCategoriePage />} />
          <Route  path="/admin/addproduct" element={<AdminAddProductPage />} />

          <Route  path="/user/allorders" element={<UserAllOrdersPage />} />
          <Route  path="/user/productfavorite" element={<UserFavoriteProdutsPage />} />

          <Route  path="/user/Adress" element={<UserAdressePage />} />
          
          

          <Route  path="/user/add-address" element={<UserAddAdressPage />} />
          <Route  path="/user/edit-address" element={< UserEditAdressPage />} />
          <Route  path="/user/profile" element={< UserProfilePage />} />
         
          

          

          

          
          
         
          
          
          
          
          




          

          
        </Routes>
      
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
