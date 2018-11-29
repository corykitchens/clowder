import React, { Component } from 'react';

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {breed: ''};
  }

  onChange(e) {
    console.log('On change');
    this.setState({breed: e.target.value});
    this.props.onSearchChange(e.target.value);
  }

  render() {
    return (
      <nav className="panel">
        <p className="panel-heading">Filter {this.state.breed} </p>
        <div className="panel-block">
          <p className="control has-icons-left">
            <input className="input is-primary" type="text" placeholder="Filter by Breed" value={this.state.breed} onChange={this.onChange} />
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