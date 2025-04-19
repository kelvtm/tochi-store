import { Route, Routes } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/homepage/homepage.component";

const HatsPage = () => (
  <div>
    <h1> Hats Page</h1>
  </div>
);

function App() {
  return (
    <div>
      <switch>
        <Routes>
          <Route exact path="/" Component={HomePage}></Route>
          <Route path="/hats" Component={HatsPage}></Route>
        </Routes>
      </switch>
    </div>
  );
}

export default App;
