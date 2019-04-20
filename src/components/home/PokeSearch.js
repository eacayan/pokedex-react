import React, { Component } from 'react';
import { Redirect } from 'react-router';

class PokeSearch extends Component {
  state = {
    searchTerm: '',
    filteredSearchTerm: [],
    toDetail: false
  }

  onInputChange = (e) => {
    const { pokemonNames, filterSearch } = this.props;
    const value = e.target.value
    console.log('pokemonNames', pokemonNames)

    let filteredSearchTerm;

    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, 'i');
      filteredSearchTerm = pokemonNames.sort().filter((item) => regex.test(item));

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

    this.setState({
      toDetail: true
    });
  }

  render() {
    const { searchTerm, toDetail } = this.state;

    if (toDetail) {
      return <Redirect to={`pokemon/${searchTerm}`} />
    };

    return (
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper red darken-2">
            <a href="/" className="brand-logo left" style={{ paddingLeft: "2em" }}>Pokédex</a>
            <form
              onSubmit={this.onFormSubmit}
              className="right"
              style={{ width: "70vw" }}>
              <div className="input-field">
                <input
                  type="search"
                  id="search"
                  value={searchTerm}
                  onChange={this.onInputChange}
                  autocomplete="off"
                  placeholder="Search Pokemon"
                  required
                />
                <label
                  className="label-icon" forHtml="search">
                  <i className="material-icons">search</i>
                </label>
                <i className="material-icons">close</i>
              </div>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}

export default PokeSearch;