import React, { Component } from 'react'
import PokeCard from './PokeCard';
import pokeapi from '../apis/pokeapi';

// function searchingFor(term) {
//   return function (char) {
//     return char.toLowerCase().includes(term.toLowerCase()) || !term;
//   }
// }
class PokeList extends Component {
  state = {
    pokemon: null,
    url: 'https://pokeapi.co/api/v2/pokemon/'
  }

  async componentDidMount() {
    const res = await pokeapi.get('/pokemon/?limit=20');

    this.setState({
      pokemonList: res.data['results']
    })
    console.log(this.state.pokemonList);
  }

  render() {
    const { pokemonList } = this.state;
    // const { filteredPokemon } = this.props;
    // const filteredList = pokemonList.filter(poke => {
    //   return poke.includes(filteredPokemon.toLowerCase())
    // })
    // if searchTerm return filtered PokeList based on inputted searchTerm, otherwise return full PokeList
    return (
      <div>
        <h6 className="grey-text">Browse Pokemon</h6>
        {/* {filteredList.map(pokemon => <PokeCard
          key={pokemon.name}
          name={pokemon.name}
          url={pokemon.url} />)} */}
        {pokemonList ? pokemonList.map(pokemon => <PokeCard
          key={pokemon.name}
          name={pokemon.name}
          url={pokemon.url}
        />) : <h3>Loading...</h3>}

      </div>
    )
  }
}

export default PokeList;