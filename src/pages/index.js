import React from "react";
import Link from "gatsby-link";

import Container from "../components/container/Container";

const IndexPage = ({ children, data:{allDataJson} }) => {
  // console.log(">>>>", allDataJson)
  return (
  <main>
    <h1>{allDataJson.edges[0].node.homePage.title}</h1>
    <Link to="/about/">About</Link>
  </main>
  )
};

export default IndexPage;

export const query = graphql`
  query IndexQuery {
    allDataJson {
      edges {
        node {
          homePage {
            title
          } 
        }
      }
    }  
  }
`