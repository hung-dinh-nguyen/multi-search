import './App.css';
import React from 'react'; 
import Search from './search'


class App extends React.Component{
  constructor(props) {
      super(props); 
      this.state = {
        input: 'Enter Topics Here',
      }
      this.handleChange = this.handleChange.bind(this);
      this.onClick = this.onClick.bind(this); 
  }

  handleChange(e) {
    this.setState({
        input: e.target.value
    }); 
  }


  render() {
    return (
    <div className="App">
        <div className="intro">
          <h1>Multi-Search</h1>
            <p>Tool to Perform Multiple Google Searches at Once!</p>
          <div className="instructions">
            <h2>Instructions</h2>
              <ol>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ol>
          </div>
        </div>

        <Search
          input={this.state.input} 
          onChange={this.handleChange} 
          onClick={this.onClick}
        />
    </div>
    );
  }
}

export default App;
