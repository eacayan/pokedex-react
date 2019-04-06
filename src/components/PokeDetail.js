import React from 'react';
import PokeSprite from 'react-poke-sprites';

const PokeDetail = ({ details }) => {
  return (
    <div class="row">
      <div className="card-image center-align sprite">
        <PokeSprite
          pokemon={`${details.name}`}
          className={`${details.name}-class`} />
      </div>
      <div className="card-content center-align">
        <div className="name">
          Name: {details.name
            .toLowerCase()
            .split(' ')
            .map(
              letter => letter.charAt(0).toUpperCase() + letter.substring(1))
            .join('')}
        </div>
        <div className="types">
          Type: {details.types.map(({ type }) => {
            return (
              <div>
                {type.name
                  .toLowerCase()
                  .split(' ')
                  .map(
                    letter => letter.charAt(0).toUpperCase() + letter.substring(1))
                  .join('')}
              </div>
            )
          })}
        </div>
        <div className="abilities">
          Abilities: {details.abilities.map(({ ability }) => {
            return (
              <div>
                {ability.name
                  .toLowerCase()
                  .split(' ')
                  .map(
                    letter => letter.charAt(0).toUpperCase() + letter.substring(1))
                  .join('')}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default PokeDetail;