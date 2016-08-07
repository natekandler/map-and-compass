import React, { Component } from 'react';
import { Link } from 'react-router'
import { getCategories } from '../../api/CategoriesAPI'
import { connect } from 'react-redux';
import Nav from '../Nav/Nav'


export default class CategoriesIndex extends Component {

  renderCategories() {
    console.log(this.props.categories)
    return this.props.categories.map(category => 
      <li key={category.id}><Link to={`/categories/${category.slug}`}>{category.name}</Link></li>
    )
  }
  
  render() {
    return (
      <div>
        <Nav />
        <h1>Categories Index</h1>
          <div ref="pagesWrapper">
            {this.renderCategories()}
          </div>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    categories: state.categories
  }
}
//Anything returned from this function will end up as props on the booklist container
//connect takes a function and a component and creates a container
//promote booklist from a component to a container. - it needs to know about new dispatch method,
//selectBook. Make it available as a prop
export default connect(mapStateToProps)(CategoriesIndex);

