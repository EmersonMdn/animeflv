import "./App.css";
import AnimesContainer from "./components/Animes/AnimesContainer";
import Header from "./components/Header/Header.js";

function App() {
  return (
    <>
      <Header />

      <main>
        <AnimesContainer />
      </main>
    </>
  );
}

export default App;
