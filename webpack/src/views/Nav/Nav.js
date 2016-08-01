import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'
import { connect } from 'react-redux';


export default class Nav extends Component {
  componentWillMount(){
    this.setState({slug: null})
  }

  render() {
    return (
      <div>
        <div ref="navWrapper">
          <ul>
          <li key="1"><Link to={"/categories/travel"}>Travel</Link></li>
          <li key="2"><Link to={"/categories/inspiration"}>Inspiration</Link></li>
          <li key="3"><Link to={"/categories/lifestyle"}>Lifestyle</Link></li>
          <li>Features
            <ul>
              <li key="4"><Link to={"/categories/guides"}>Guides</Link></li>
              <li key="5"><Link to={"/categories/photo_essays"}>Photo Essays</Link></li>
              <a href="#"><li>Guides</li></a>
              <a href="#"><li>Photo Essays</li></a>
            </ul>
          </li>
          <li key="6"><Link to={"/about"}>About</Link></li>
          </ul>
        </div>
      </div>
    );
  }
};

function mapStateToProps(state, ownProps) {
  return {
    id: ""
  };
}
//Anything returned from this function will end up as props on the booklist container
//connect takes a function and a component and creates a container
//promote booklist from a component to a container. - it needs to know about new dispatch method,
//selectBook. Make it available as a prop
export default connect(mapStateToProps)(Nav);

