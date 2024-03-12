import { useState } from "react";
import Layout from "./components/Layout";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Home from "./components/Home";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="resume" element={<Resume />} />
        <Route path="projects" element={<Projects />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
