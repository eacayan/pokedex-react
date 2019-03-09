import React, { Component } from 'react'
// import PokeSprite from 'react-poke-sprites';

class PokeCard extends Component {
  state = {
    name: '',
    image: '',
    pokemonId: ''
  }

  componentDidMount() {
    const { name, url } = this.props;
    // Pokemon ID numbers located in index 6 after split
    const pokemonId = url.split('/')[6];
    const image = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonId}.png?raw=true`;

    this.setState({
      name,
      image,
      pokemonId
    })

  }
  render() {
    const { name, image } = this.state;

    return (

      <div className="col s12 m6 l4">
        <div className="card center-align">
          <span className="card-image">
            <img src={image} alt={`${name}'s sprite`} />
          </span>
          <div className="card-content">
            {name
              .toLowerCase()
              .split(' ')
              .map(
                letter => letter.charAt(0).toUpperCase() + letter.substring(1))
              .join('')}
          </div>
        </div>
      </div>

    );
  }
}

export default PokeCard;