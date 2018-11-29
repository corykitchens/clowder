import React, { Component } from 'react';
import CatFact from './CatFact';

class CatFacts extends Component {
  constructor() {
    super();
    this.state = { data: []};
  }

  componentWillMount() {
    fetch('/api/catfacts')
    .then(response => response.json())
    .then(data => this.setState( { data }))
    .catch(err => {
      const mockData = [{
                "id": 1,
                "breed": "BreedA",
                "fact": "lorem ipsum",
                "photo": "https://ichef.bbci.co.uk/images/ic/720x405/p0517py6.jpg"
              },
              {
                "id": 2,
                "breed": "BreedA",
                "fact": "lorem ipsum",
                "photo": "https://ichef.bbci.co.uk/images/ic/720x405/p0517py6.jpg"
              },
              {
                "id": 3,
                "breed": "BreedA",
                "fact": "lorem ipsum",
                "photo": "https://ichef.bbci.co.uk/images/ic/720x405/p0517py6.jpg"
              }]
      this.setState({ data: this.state.data.concat(mockData)})
    });
  }

  componentDidMount() {
  }

  
  render() {
    const { data } = this.state;
    return (
      <ul>
        {data.map((cat) => {
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