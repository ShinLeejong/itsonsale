import React from "react";
import { Route, Routes } from "react-router-dom";
import Cu from "../store/Cu";
import Emart24 from "../store/Emart24";
import Gs25 from "../store/Gs25";
import Ministop from "../store/Ministop";
import Seven from "../store/Seven";
import Entry from "./Entry";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Entry />}></Route>
      <Route path="/cu" element={<Cu />}></Route>
      <Route path="/gs25" element={<Gs25 />}></Route>
      <Route path="/7eleven" element={<Seven />}></Route>
      <Route path="/ministop" element={<Ministop />}></Route>
      <Route path="/emart24" element={<Emart24 />}></Route>
    </Routes>
  );
};

export default Router;
