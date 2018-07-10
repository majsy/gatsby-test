import React from "react";
import Link from "gatsby-link";

import Container from "../components/container/Container";

const HomePage = ({ children, data }) => (
  <main>
    <h1>Home</h1>
    <Link to="/about/">About</Link>
  </main>
);

export default HomePage;

export const query = graphql`
query HomeQuery {
  homePage {
    title
  }
}
`