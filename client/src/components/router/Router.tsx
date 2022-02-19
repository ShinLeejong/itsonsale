import { Route, Routes } from "react-router-dom";
import ProductList from "../store/ProductList";
import Entry from "./Entry";
import NotFound from "./NotFound";

const Router = () => {
  return (
    <Routes>
      <Route path="/itsonsale" element={<Entry />}>
        <Route path=":store" element={<ProductList />} />
      </Route>
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
