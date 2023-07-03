import { Route, Routes } from "react-router-dom";
import "./App.css";
import AnimesContainer from "./components/Animes/AnimesContainer";
import Header from "./components/Header/Header.js";
import ItemDetail from "./components/ItemDetail/ItemDetail";

function App() {
  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<AnimesContainer />} />
          <Route path="/:id" element={<ItemDetail />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
