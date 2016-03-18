import React, { Component } from 'react';
import { Link } from 'react-router'
import { getPages, getPages2 } from '../../api/PagesAPI'

function renderPages(){
  var pages = getPages2();
  for(page in pages){
    console.warn(page)
  }
}

export default class PagesIndex extends Component {

  render() {
    var pages = getPages2();
    console.warn(pages)
    return (
      <div>
        <h1>PagesIndex</h1>
        {renderPages()}    
      </div>
    );
  }
};
