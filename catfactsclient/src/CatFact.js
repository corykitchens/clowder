import React, { Component } from 'react';

class CatFact extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { cat } = this.props;
    return (
      <div className="card cat-fact-card">
        <div className="columns">
          <div className="column">
            <div className="card-image">
              <figure className="image is-128x128 cat-image">
                <img src={cat.photo} alt="" />
              </figure>
            </div>
          </div>
          <div className="column">
            <div className="card-content">
              <p className="title is-4">{cat.breed}</p>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <div className="content">
              <p>{cat.fact}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CatFact;