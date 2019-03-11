import React, { Component } from 'react'
// import PokeSprite from 'react-poke-sprites';
import pokeball from '../assets/pokeball.gif';

class PokeCard extends Component {
  state = {
    name: '',
    image: '',
    pokemonId: '',
    imageLoading: true
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
    const { name, image, imageLoading } = this.state;

    return (
      <div className="col s12 m6 l4">
        <div className="card center-align">
          <span className="card-image">
            <img
              src={image}
              alt={`${name}'s sprite`}
              onLoad={() => this.setState({ imageLoading: false })} />
          </span>
          {imageLoading ? (
            <img
              src={pokeball} alt="loading"
              style={{ marginTop: '2.5em', width: '7em', height: '7em' }}></img>
          ) : null}
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