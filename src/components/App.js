import React, { Component } from 'react';
import PokeSearch from './PokeSearch';
import PokeCard from './PokeCard';
import PokeDetail from './PokeDetail';
import pokeapi from '../apis/pokeapi';


class App extends Component {
  state = {
    originalPokemonList: [],
    filteredPokemonList: [],
    pokemonNames: '',
    showDetails: false,
    details: {}
  }

  async componentDidMount() {
    const res = await pokeapi.get('/pokemon/?limit=151');

    const pokemonList = res.data['results'];
    const pokemonNames = res.data['results'].map(item => { return item.name });


    this.setState({
      originalPokemonList: pokemonList,
      filteredPokemonList: pokemonList,
      pokemonNames
    });
  }

  toggleDetails = async (name) => {
    const pokemon = await pokeapi.get(`/pokemon/${name}`);
    const pokemonData = pokemon.data;

    this.setState({
      showDetails: true,
      details: pokemonData
    })
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
        // if included, assign state to the new filtered lists and search term
        this.setState({
          filteredPokemonList: newFilteredList,
        });
      })
      // if no search term exists or searchbox is emptied, go back to original list
      : this.setState({
        filteredPokemonList: originalPokemonList
      })
  }

  render() {
    const { pokemonNames, filteredPokemonList, showDetails, details } = this.state;

    return (
      <div className="container">
        <h4 className="red-text text-darken-1 center">Pokedex </h4>
        <div className="row">
          <div className="col s12 m6">
            <PokeSearch
              pokemonNames={pokemonNames}
              filterSearch={this.filterSearch}
            />

            {filteredPokemonList
              ? filteredPokemonList.map((pokemon) => <PokeCard
                key={pokemon.name}
                name={pokemon.name}
                url={pokemon.url}
                toggleDetails={this.toggleDetails}

              />)
              : <h3>Loading...</h3>}
          </div>

          <div className="col s12 m6">
            {showDetails
              ? <PokeDetail
                details={details}
              />
              : null}
          </div>
        </div>
      </div>
    );
  }
}

export default App;


// filterSearch = (filteredNames) => {
//   console.log('App filteredNames', filteredNames)

//   // bago ka magfilter, check mo muna kung ung basis mo (whcih is ung pokemon names) ay may laman.

//   if (filteredNames) {
//     // gawa ka muna ng lalagyan ng bagong filtered list
//     let newFilteredList = [];
//     // filter mo ung array ng pokemon list
//     this.originalPokemonList.map(eachPokemon => {

//       // check mo kung ung panglan ng pokemon is nandun sa filteredNames 
//       if (filteredNames.includes(eachPokemon.name)) {
//         // Pag nandun ung name nung pokemon sa filteredList, ilagay mo sya sa bagong filtered Card array list
//         newFilteredList.push(eachPokemon);
//       }
//     })
//     // Tapos pag nakuha mo na ung bagong filtered Card array list, assign mo sya sa filteredPokemonList na state
//     this.setState({
//       pokemonNames: filteredNames,
//       filteredPokemonList: newFilteredList
//     })
//   }
//   // pag inempty si search, kailangan bumalik sa dating list
//   else {
//     this.setState({
//       filteredPokemonList: this.originalPokemonList
//     })
//   }
// }