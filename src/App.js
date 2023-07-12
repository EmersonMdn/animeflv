import { Route, Routes } from "react-router-dom";
import "./App.css";
import AnimesContainer from "./components/Animes/AnimesContainer";
import Header from "./components/Header/Header.js";
import ItemDetail from "./components/ItemDetail/ItemDetail";
import SideBar from "./components/SideBar/SideBar";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <SideBar />

        <div className="main">
          <main>
            <Routes>
              <Route path="/" element={<AnimesContainer />} />
              <Route path="/anime/:id" element={<ItemDetail />} />
            </Routes>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
