import React, { Component } from 'react';
import { Link } from 'react-router'
import { getPages, getPages2 } from '../../api/PagesAPI'


export default class PagesIndex extends Component {
  componentWillMount(){
    this.setState({pages: null})
  }

  componentDidMount(){
    this.renderPages()
  };
  
  renderPages() {
    getPages().then((response) => {
      response.json().then((data) => {
        let pages = data.pages.map(page => 
         <div><div>{page.excerpt}</div><div dangerouslySetInnerHTML={{__html: page.content}}/></div>
        )
        this.setState({pages: pages})
      });
    })
  }
  
  render() {
    return (
      <div>
        <h1>PagesIndex</h1>
          <div ref="pagesWrapper">
            {this.state.pages}
          </div>
      </div>
    );
  }
};
