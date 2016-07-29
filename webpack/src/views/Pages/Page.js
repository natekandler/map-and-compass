import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'

import { getPage } from '../../api/PagesAPI'
import { connect } from 'react-redux';


export default class Page extends Component {
  componentWillMount(){
    this.setState({id: null})
  }

  componentDidMount(){
    this.renderPage(this.props.id)
    console.log('page props', this.props)
  };
  
  renderPage(pageId) {
    getPage(pageId).then((response) => {
      response.json().then((data) => {
        this.setState({
          title: data.title,
          content: data.content,
          excerpt: data.excerpt
        })
      });
    })
  }
  
  render() {
    console.log('content', this.state.content)
    return (
      <div>
        <h1>Page</h1>
          <div ref="pagesWrapper">
            {this.state.title}
          </div>
          <div>
            <div>{this.state.excerpt}</div>
            <div className="content" dangerouslySetInnerHTML={{__html: this.state.content}}/>
          </div>
      </div>
    );
  }
};

function mapStateToProps(state, ownProps) {
  return {
    id: ownProps.params.id,
  };
}
//Anything returned from this function will end up as props on the booklist container
//connect takes a function and a component and creates a container
//promote booklist from a component to a container. - it needs to know about new dispatch method,
//selectBook. Make it available as a prop
export default connect(mapStateToProps)(Page);

