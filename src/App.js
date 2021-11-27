import GlobalStyles from "components/GlobalStyles";
import Footer from "components/Footer";
import Home from "pages/Home";
import SellOnShopee from "pages/SellOnShopee";
import PrivateRoute from "components/PrivateRoute";
import Login from "pages/Login";
import SignUp from "pages/SignUp";
import ProductDetail from "pages/ProductDetail";
import Cart from "pages/Cart";
import NotFound from "pages/NotFound";
import AuthProvider from "context/auth/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <GlobalStyles>
      <Router>
        <div className="App">
          <AuthProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/sell-on-shopee" element={<PrivateRoute />}>
                <Route path="/sell-on-shopee" element={<SellOnShopee />} />
              </Route>
              <Route path="/product-detail/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<PrivateRoute />}>
                <Route path="/cart" element={<Cart />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </AuthProvider>
        </div>
      </Router>
    </GlobalStyles>
  );
}

export default App;
