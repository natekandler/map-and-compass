import React, { Component } from 'react';
import { Link } from 'react-router'
import { getPages } from '../../api/PagesAPI'
import { connect } from 'react-redux';


export default class CategoriesIndex extends Component {
  componentWillMount(){
    this.setState({categories: null})
  }

  componentDidMount(){
    this.renderPages()
  };
  
  renderPages() {
    getPages().then((response) => {
      response.json().then((data) => {
        let pages = data.pages.map(page => 
          <li key={page.id}><Link to={`/pages/${page.id}`}>{page.title}</Link></li>
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

function mapStateToProps(state) {
  //whatever is returned from here will show up as props inside Booklist
  return {
    categories: state.categories
  }
}
//Anything returned from this function will end up as props on the booklist container
//connect takes a function and a component and creates a container
//promote booklist from a component to a container. - it needs to know about new dispatch method,
//selectBook. Make it available as a prop
export default connect(mapStateToProps)(CategoriesIndex);

