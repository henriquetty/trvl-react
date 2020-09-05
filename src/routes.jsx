import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Services from "./pages/Services";
import Products from "./pages/Products";
import SignUp from "./pages/SignUp";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Homepage} />
      <Route path="/services" exact component={Services} />
      <Route path="/products" exact component={Products} />
      <Route path="/sign-up" exact component={SignUp} />
    </BrowserRouter>
  );
}

export default Routes;
