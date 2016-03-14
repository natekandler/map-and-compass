import React, { Component } from 'react';
import { Link } from 'react-router'
import { getPages, parseJson } from '../../api/PagesAPI'

export default class PagesIndex extends Component {

  render() {
    var pages = getPages();
    console.warn(pages)
    return (
      <div>
        <h1>PagesIndex</h1>
      </div>
    );
  }
};
