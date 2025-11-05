import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "../layout/layout";
import Home from "../../pages/Home/Home";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
