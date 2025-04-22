import { Route, Routes } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/homepage/homepage.component";
import SignInAndSignUpPage from "./pages/signin-and-signup-page/signin-and-signup.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";

const HatsPage = () => (
  <div>
    <h1> Hats Page</h1>
  </div>
);

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route exact path="/" Component={HomePage}></Route>
        <Route path="/shop" Component={ShopPage}></Route>
        <Route path="/signIn" Component={SignInAndSignUpPage}></Route>
      </Routes>
    </div>
  );
}

export default App;
