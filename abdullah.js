import React from 'react';
import image1 from './image.jpg';
import './App.css';

class Abdullah extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
    name: "Abdullah's Component"
    ,
    imageshow: image1
    ,
    
    };
    }
    render() {
    return (
        <div className="App">
        <header className="App-header">
        <h1>
           {this.state.name}
          </h1>
          <img src={this.state.imageshow} className="App-logo" alt="logo" />
        </header>
      </div>
    );
    }
    }

export default Abdullah;