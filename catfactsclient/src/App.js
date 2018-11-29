import React, { Component } from 'react';
import index from './index.css';
import Title from './Title';
import SearchBox from './SearchBox';
import CatFacts from './CatFacts';

class App extends Component {
  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <Title text="Cat Facts"/>
              <SearchBox />
              <Title text="Cats" />
              <CatFacts />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default App;
