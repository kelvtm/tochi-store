import { Route, Routes } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/homepage/homepage.component";
import SignInAndSignUpPage from "./pages/signin-and-signup-page/signin-and-signup.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import { auth } from "./firebase/firebase.utils";
import React from "react";

const HatsPage = () => (
  <div>
    <h1> Hats Page</h1>
  </div>
);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }
  unSubscribeFromAuth = null;

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />

        <Routes>
          <Route exact path="/" Component={HomePage}></Route>
          <Route path="/shop" Component={ShopPage}></Route>
          <Route path="/signIn" Component={SignInAndSignUpPage}></Route>
        </Routes>
      </div>
    );
  }
}

export default App;
