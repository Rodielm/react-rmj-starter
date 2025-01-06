import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import TodoApp from "./apps/TodoApp.jsx";
import TodoApp2 from "./apps/TodoApp2";
import TodoApp3 from "./apps/TodoApp3";
import GalleryApp from "./apps/GalleryApp";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Todo Basic */}
    {/* <TodoApp /> */}
    {/* Todo useEffect and LocalStorage */}
    {/* <TodoApp3 /> */}
    {/* Todo useLocalStorage */}
    <GalleryApp />
  </StrictMode>
);
