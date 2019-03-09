import React, { Component } from 'react';
import PokeSearch from './PokeSearch';
import PokeList from './PokeList';
import pokeapi from '../apis/pokeapi';


class App extends Component {
  state = {
    pokemonList: [],
    selectedPokemon: null
  }

  // use as prop for PokeList selection
  onPokemonSelection = async (pokemon) => {
    const res = await pokeapi.get(`/pokemon/${pokemon}`);

    this.setState({
      pokemonList: res.data['results'],
      selectedPokemon: res.data.types,
    });
    console.log(this.state.selectedPokemon);
  }

  render() {
    return (
      <div className="container">
        <h4 className="red-text text-darken-1 center">Pokedex V1</h4>
        <div className="row">
          <div className="col s12 m6">
            <PokeSearch
              selectedPokemon={this.onPokemonSelection}
            />
            <PokeList />
          </div>
          <div className="col s12 m6">right</div>
        </div>
      </div>
    );
  }
}

export default App;