import React from 'react';
import { Card } from 'semantic-ui-react';

class PokemonCard extends React.Component {
  constructor() {
    super();
    this.state = {
      showFront: true,
    };
  }

  handleClick = e => {
    this.setState({ showFront: !this.state.showFront });
  };

  render() {
    const pokemon = this.props.pokemon;
    const hp = this.props.pokemon.stats.reduce(
      (a, c) => (c.name === 'hp' ? c.value : a),
      0
    );

    return (
      <Card>
        <div>
          <div className="image" onClick={this.handleClick}>
            <img
              src={pokemon.sprites[this.state.showFront ? 'front' : 'back']}
              alt={pokemon.name}
            />
          </div>
          <div className="content">
            <div className="header">{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp} hp
            </span>
          </div>
        </div>
      </Card>
    );
  }
}

export default PokemonCard;
