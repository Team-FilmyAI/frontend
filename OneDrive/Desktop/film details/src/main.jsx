import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import MovieDetailsPage from "./MovieDetailsPage";
import "./MovieDetailsPage.css"; 

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <MovieDetailsPage />
    </BrowserRouter>
  </React.StrictMode>
);
