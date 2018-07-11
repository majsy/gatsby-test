import React from "react";
import Footer from "../components/footer/Footer";

import PageWrapper from "../components/page-wrapper/PageWrapper";

import '../base/global.module.css';

const LayoutPage = ({ children, data:{allDataJson} }) => {
  return (
    <div>
      {children()}
      <Footer data={allDataJson.edges[0].node.footer} />
    </div>
  )
};

export default LayoutPage;

export const query = graphql`
query LayoutQuery {
  allDataJson {
    edges {
      node {
        footer {
          title
        } 
      }
    }
  }  
}
`