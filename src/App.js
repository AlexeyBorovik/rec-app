import "./App.css";
import { SideBar } from "./components/SideBar/SideBar";
import { Header } from "./components/Header/Header";
import { MyPage } from "./components/MyPage/MyPage";
import { MainPage } from "./components/MainPage/MainPage";
import { Route, Routes } from "react-router-dom";
import { Auth } from "./components/Auth/Auth";

import { Review } from "./components/Review/Review";

function App() {
  return (
    <div className="app">
      <div className="container">
        <Header />
        <SideBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<MainPage />}></Route>
            <Route path="/login" element={<Auth />}></Route>
            <Route path="my-page" element={<MyPage />}></Route>
            <Route path="review" element={<Review />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
