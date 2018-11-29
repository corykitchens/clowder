import React, { Component } from 'react';

class SearchBox extends Component {
  constructor() {
    super();
  }


  render() {
    return (
      <nav className="panel">
        <p className="panel-heading">Filter</p>
        <div className="panel-block">
          <p className="control has-icons-left">
            <input className="input is-primary" type="text" placeholder="Filter by Breed" />
            <span className="icon is-small is-right">
              <i className="fas fa-search" aria-hidden="true"></i>
            </span>
          </p>
        </div>
      </nav>
    )
  }
}

export default SearchBox;