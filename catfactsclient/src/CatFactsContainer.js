import React, { Component } from 'react';
import SearchBox from './SearchBox';
import CatFacts from './CatFacts';

class CatFactsContainer extends Component {

  constructor() {
    super();
    this.state = { data: [] };
    this.onSearchChange = this.onSearchChange.bind(this);
    this.searchCatBreed = this.searchCatBreed.bind(this);
    this.isSubString = this.isSubString.bind(this);
    this.initialCats = this.initialCats;
  }

  componentWillMount() {
    this.getInitialCats();
  }

  getInitialCats() {
    fetch('/api/catfacts')
    .then(response => response.json())
    .then(data => this.setState( { data }))
    .catch(err => {
      const mockData = [{
                "id": 1,
                "breed": "a",
                "fact": "lorem ipsum",
                "photo": "https://ichef.bbci.co.uk/images/ic/720x405/p0517py6.jpg"
              },
              {
                "id": 2,
                "breed": "b",
                "fact": "lorem ipsum",
                "photo": "https://ichef.bbci.co.uk/images/ic/720x405/p0517py6.jpg"
              },
              {
                "id": 3,
                "breed": "c",
                "fact": "lorem ipsum",
                "photo": "https://ichef.bbci.co.uk/images/ic/720x405/p0517py6.jpg"
              },
              {
                "id": 4,
                "breed": "ac",
                "fact": "lorem ipsum",
                "photo": "https://ichef.bbci.co.uk/images/ic/720x405/p0517py6.jpg"
              }]
      this.setState({ data: this.state.data.concat(mockData)})
    });
  }

  isSubString(original, sub) {
    return original.toLowerCase()
           .search(sub.toLowerCase()) != -1;
  }

  searchCatBreed(breedToFind) {
    const updatedCats = this.state.data.filter((cat) => {
      if (this.isSubString(cat.breed, breedToFind)) {
        return cat;
      }
    });
    this.setState({ data: updatedCats});
  }

  onSearchChange(breedSubString) {
    if (breedSubString.length == 0) {
      this.getInitialCats();
    } else {
      this.searchCatBreed(breedSubString);
    }
  }


  render() {
    return (
      <div>
      <SearchBox onSearchChange={this.onSearchChange}/>
      <CatFacts catFacts={this.state.data}/>
      </div>
    )
  }
}



export default CatFactsContainer;