import "./App.css";
import { SideBar } from "./components/SideBar/SideBar";
import { Header } from "./components/Header/Header";
import { MyPage } from "./components/MyPage/MyPage";
import { MainPage } from "./components/MainPage/MainPage";
import { Route, Routes } from "react-router-dom";

import { Review } from "./components/Review/Review";

function App() {
  return (
    <div className="app">
      <Header />
      <SideBar />
      <div className="content">
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="my-page" element={<MyPage />}></Route>
          <Route path="review" element={<Review />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
