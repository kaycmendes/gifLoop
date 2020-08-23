import React, { Component } from 'react';
import SearchForm from './components/SearchForm';
import GifList from './components/GifList';



export default class App extends Component {
  state = {
    gifs : []
  }
  
  
  componentDidMount() {
    this.onSearch()
  }
    
  onSearch = (query= 'league of legends') => {
    const axios = require('axios');
    // Make a request for a user with a given ID
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&limit=33&api_key=FxJ5CJ4D8qcg50KUxT0O8ZCZadmWEWX6`)
      .then(response => this.setState({
        gifs: response.data.data
      }).then(response => console.log(response))
      )
      .catch(err => console.log('Error fetching', err))

  }




  render() {
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">GifSearch</h1>
            <SearchForm onSearch={this.onSearch}/>
          </div>
        </div>
        <div className="main-content">
          <GifList
            data={this.state.gifs}
          />
        </div>
      </div>
    );
  }
}
