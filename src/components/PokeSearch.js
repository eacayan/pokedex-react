import React, { Component } from 'react';

class PokeSearch extends Component {
  state = {
    searchTerm: '',
    filteredSearchTerm: []
  }

  onInputChange = (e) => {
    const { pokemonNames, filterSearch } = this.props;
    const value = e.target.value
    console.log('pokemonNames', pokemonNames)

    let filteredSearchTerm;

    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, 'i');
      filteredSearchTerm = pokemonNames.sort().filter((item) => regex.test(item));

      console.log('filteredSearchTerm', filteredSearchTerm)

      this.setState({
        searchTerm: value,
        filteredSearchTerm
      });
    } else {
      this.setState({
        searchTerm: '',
        filteredSearchTerm: []
      })
    }

    filterSearch(filteredSearchTerm);
  }

  onFormSubmit = (e) => {
    e.preventDefault();

    // this.props.selectedPokemon(this.state.searchTerm);
  }

  render() {
    const { searchTerm } = this.state;

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
          </div>
        </form>
      </div>
    )
  }
}

export default PokeSearch;