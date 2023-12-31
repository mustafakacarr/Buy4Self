import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { CartProvider } from "./context/CartDropdownContext";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Offers from "./pages/Offers";
import Product from "./pages/Product";
import Products from "./pages/Products";
import Register from "./pages/Register";
import routes from "./routes/MainRoute";
function App() {
  return (
    <div>
      <CartProvider>
        <Header />
        <BrowserRouter>
          <Routes>
            {routes.map((route) => (
              <Route path={route.path} element={route.component} />
            ))}
          </Routes>
        </BrowserRouter>
        <Footer />
      </CartProvider>
    </div>
  );
}

export default App;
