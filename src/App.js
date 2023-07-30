import { Route, Routes } from "react-router-dom";
import "./App.css";
import AnimesContainer from "./components/Animes/AnimesContainer";
import Header from "./components/Header/Header.js";
import SideBar from "./components/SideBar/SideBar";
import ItemDetailPage from "./components/ItemDetailPage/ItemDetailPage";
import Footer from "./components/Footer/Footer";

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
              <Route path="/:type/:id" element={<ItemDetailPage />} />
            </Routes>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
