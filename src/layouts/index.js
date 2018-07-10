import React from "react";
import Footer from "../components/footer/Footer";

import '../base/global.module.css';

export default ({ children }) => (
  <div>
    {children()}
    <Footer />
  </div>
);