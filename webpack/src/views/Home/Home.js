import React, { Component } from 'react';
import { Link } from 'react-router'
import { cdn } from '../../utils/cdn';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <div className="image-wrapper">
          {/*<img src={cdn('bison.jpg')}/>*/}
        </div>
      </div>
    );
  }
};

