import React from "react";
// Style
import "./assets/styles/all.min.css";

// swiper
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/lazy";

import "./assets/styles/styles.css";

// Layout
import Layout from "./layouts";
import Router from "./router";

export default function App() {
  return (
    <Layout>
      <Router />
    </Layout>
  );
}
