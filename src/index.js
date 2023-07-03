import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ComicsProvider from "./context/MarvelContex";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ComicsProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ComicsProvider>
);
