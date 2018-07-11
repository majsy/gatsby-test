import React from "react";
import Link from "gatsby-link";

import Intro from "../components/home-page/intro/Intro";

const IndexPage = ({ children, data:{allDataJson} }) => {
  // console.log(">>>>", allDataJson)
  return (
  <main>
    <h1>{allDataJson.edges[0].node.homePage.title}</h1>
    <Link to="/about/">About</Link>
    <Intro data={allDataJson.edges[0].node.homePage.introText} />
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
            introText {
              first
              second
            }
          } 
        }
      }
    }  
  }
`