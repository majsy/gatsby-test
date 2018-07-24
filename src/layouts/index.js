import React from "react";
import Footer from "../components/footer/Footer";

import '../base/global.module.css';

class TemplateWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      plants: []
    }
  }

  onSubmit = (e) => {
    console.log('has submitted');
  }

  render() {
    let { children, data: {allDataJson}} = this.props;
    const { state } = this.state;

    return (
      <div>
        {children({ ...this.props, state})}
        <Footer data={allDataJson.edges[0].node.footer} />
      </div>
    )
  }
 }

export default TemplateWrapper;

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