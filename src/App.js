import "./App.css";
import { SideBar } from "./components/SideBar/SideBar";
import { Header } from "./components/Header/Header";
import { MyPage } from "./components/MyPage/MyPage";
import { MainPage } from "./components/MainPage/MainPage";
import { Navigate, Route, Routes } from "react-router-dom";
import { Auth } from "./components/Auth/Auth";
import { AuthContext } from "./Context";

import { Review } from "./components/Review/Review";
import { EditReview } from "./components/EditReview/EditReview";
import { useState } from "react";

function App() {
  const [name, setName] = useState();

  const signIn = (name) => {
    setName(name);
  };
  const signOut = () => {
    setName(null);
  };

  return (
    <AuthContext.Provider value={{ name, signIn, signOut }}>
      <div className="light" id="main">
        <div className="container">
          <Header />
          <SideBar />
          <div className="content">
            <Routes>
              <Route path="/" element={<MainPage />}></Route>
              <Route
                path="/login"
                element={name ? <Navigate to="/" /> : <Auth />}
              ></Route>
              <Route path="my-page" element={<MyPage />}></Route>
              <Route path="review" element={<Review />}></Route>
              <Route path="edit-review" element={<EditReview />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
