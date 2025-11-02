import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "../layout/layout";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
