import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'

import { getCategory } from '../../api/CategoriesAPI'
import { connect } from 'react-redux';


export default class Category extends Component {
  componentWillMount(){
    this.setState({slug: ''})
  }

  componentDidMount(){
    this.renderCategory(this.props.slug)
    console.log('page props', this.props)
  };
  
  renderCategory(categorySlug) {
    getCategory(categorySlug).then((response) => {
      response.json().then((data) => {
        this.setState({
          name: data.category.name,
          pages: data.category.pages
        })
      });
    })
  }

  render() {
    console.log('content', this.state.content)
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};

function mapStateToProps(state, ownProps) {
  return {
    slug: ownProps.params.slug,
  };
}
//Anything returned from this function will end up as props on the booklist container
//connect takes a function and a component and creates a container
//promote booklist from a component to a container. - it needs to know about new dispatch method,
//selectBook. Make it available as a prop
export default connect(mapStateToProps)(Category);

