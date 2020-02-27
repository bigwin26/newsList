import React from "react";
import NewsPage from "./pages/NewsPage";
import { Route } from "react-router-dom";

function App() {
  return <Route path="/:category?" component={NewsPage} />;
}

export default React.memo(App);
