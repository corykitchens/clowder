import React, { Component } from 'react';
import CatFact from './CatFact';

class CatFacts extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { catFacts } = this.props;
    return (
      <ul>
        {catFacts.map((cat) => {
          return (
            <li>
              <CatFact cat={cat} />
            </li>
          )
        })}
      </ul>
    )
  }
}

export default CatFacts;