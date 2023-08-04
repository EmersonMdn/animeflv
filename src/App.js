import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import AnimesContainer from "./components/Animes/AnimesContainer";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import ItemDetailPage from "./components/ItemDetailPage/ItemDetailPage";
import Footer from "./components/Footer/Footer";
import "./App.css";
import { Context } from "./context/Context";

function App() {
  // Consume el estado isLoading desde el contexto
  const { isLoading } = useContext(Context); // Reemplaza YourContext por el nombre de tu contexto

  if (isLoading) {
    // Muestra el loader mientras los datos se están cargando
    return (
      <div className="loader-container">
        <span className="loader"></span>
      </div>
    );
  }

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
