import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Navbar} />
    </BrowserRouter>
  );
}

export default Routes;
