import React, { Component } from 'react';
import { Link } from 'react-router'
import { cdn } from '../../utils/cdn';
import Nav from '../Nav/Nav'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Nav />
        <h1>Home</h1>
        <div className="image-wrapper">
          {/*<img src={cdn('bison.jpg')}/>*/}
        </div>
      </div>
    );
  }
};

