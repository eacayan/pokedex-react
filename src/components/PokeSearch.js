import React, { Component } from 'react';

class PokeSearch extends Component {
  state = {
    searchTerm: ''
  }

  onInputChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    });
  }

  onFormSubmit = (e) => {
    e.preventDefault();

    this.props.selectedPokemon(this.state.searchTerm);
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
            <button className="btn-small red">SEARCH</button>
          </div>
        </form>
      </div>
    )
  }
}

export default PokeSearch;