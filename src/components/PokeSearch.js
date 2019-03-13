import React, { Component } from 'react';
import PokeList from './PokeList';

class PokeSearch extends Component {
  state = {
    searchTerm: '',
    filteredSearches: []
  }

  onInputChange = (e) => {
    const { options } = this.props;
    const value = e.target.value

    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, 'i');
      const filteredSearches = options.sort().filter((item) => regex.test(item));

      this.setState({
        searchTerm: value,
        filteredSearches
      });
    } else {
      this.setState({
        filteredSearches: [],
        searchTerm: ''
      })
    }
  }

  onFormSubmit = (e) => {
    e.preventDefault();

    this.props.selectedPokemon(this.state.searchTerm);
  }

  render() {
    const { searchTerm, filteredSearches } = this.state;

    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div className="input-field">
            <label htmlFor="search">Search Pokemon</label>
            <input
              type="text"
              value={searchTerm}
              onChange={this.onInputChange}
            />
            <button className="btn-small red">SEARCH</button>

            <PokeList
              filteredOptions={filteredSearches}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default PokeSearch;