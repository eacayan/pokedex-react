import React, { Component, Fragment } from 'react'
import PokeSearch from './PokeSearch';
import PokeCard from './PokeCard';

import pokeapi from '../../apis/pokeapi';

class PokeHome extends Component {
  state = {
    originalPokemonList: [],
    filteredPokemonList: [],
    pokemonNames: ''
  }

  async componentDidMount() {
    const res = await pokeapi.get('/pokemon/?limit=493');

    const pokemonList = res.data['results'];
    const pokemonNames = res.data['results'].map(item => { return item.name });

    this.setState({
      originalPokemonList: pokemonList,
      filteredPokemonList: pokemonList,
      pokemonNames
    });
  }

  filterSearch = (filteredSearchTerm) => {
    const { originalPokemonList } = this.state;
    let newFilteredList = [];

    // check if filteredSearchTerm exists
    filteredSearchTerm
      // if yes, map original list
      ? originalPokemonList.map(eachPokemon => {
        // then check if names are included in filteredSearch Term 
        if (filteredSearchTerm.includes(eachPokemon.name)) {
          // if included, push to newFilteredList
          newFilteredList.push(eachPokemon)
        }
        // also if included, assign state to the new filtered lists and search term
        this.setState({
          filteredPokemonList: newFilteredList,
        });
      })
      // if no search term exists or searchbox is emptied, go back to original list
      : this.setState({
        filteredPokemonList: originalPokemonList
      });
  }

  render() {
    const { pokemonNames, filteredPokemonList } = this.state;

    return (
      <Fragment>
        <PokeSearch
          pokemonNames={pokemonNames}
          filterSearch={this.filterSearch}
        />
        <div className="container">
          <div className="row">
            {filteredPokemonList
              ? filteredPokemonList.map((pokemon) => <PokeCard
                key={pokemon.name}
                name={pokemon.name}
                url={pokemon.url}
              />)
              : <h3>Loading...</h3>}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default PokeHome;

