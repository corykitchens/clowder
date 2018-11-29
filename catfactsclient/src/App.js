import React, { Component } from 'react';
import index from './index.css';
import Title from './Title';
import CatFactsContainer from './CatFactsContainer';


class App extends Component {
  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <Title text="Cat Facts"/>
              <CatFactsContainer />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default App;
