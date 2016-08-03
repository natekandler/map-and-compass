import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'
import { connect } from 'react-redux';


export default class About extends Component {
  render() {
    return (
      <div>
        About      
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
export default connect(mapStateToProps)(About);

