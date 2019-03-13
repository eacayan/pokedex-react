import React, { Component } from 'react';
import PokeSearch from './PokeSearch';
import pokeapi from '../apis/pokeapi';


class App extends Component {
  state = {
    pokemonNames: [],
    pokemonId: ''
  }

  // use as prop for PokeDetail (display all data for selected Pokemon)
  onPokemonSelection = async (pokemon) => {
    const res_individual = await pokeapi.get(`/pokemon/${pokemon}`);
    // 807 total pokemon as of Gen 8
    const res_list = await pokeapi.get('/pokemon/?limit=807');

    const pokemonNames = res_list.data['results'].map(item => { return item.name });
    const pokemonId = res_individual.data.id;

    this.setState({
      pokemonNames,
      pokemonId
    });
    console.log(this.state.pokemonNames)
  }

  render() {
    const { pokemonNames } = this.state;

    return (
      <div className="container">
        <h4 className="red-text text-darken-1 center">Pokedex V1</h4>
        <div className="row">
          <div className="col s12 m6">
            <PokeSearch
              selectedPokemon={this.onPokemonSelection}
              options={pokemonNames}
            />
          </div>

          <div className="col s12 m6">right</div>
        </div>
      </div>
    );
  }
}

export default App;