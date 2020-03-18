import React from 'react';
import PokemonCard from './PokemonCard';
import { Card } from 'semantic-ui-react';

class PokemonCollection extends React.Component {
	// state = { img: 'front' };

	// flip = () => {
	// 	console.log('flip');

	// 	if (this.state.img === 'front') {
	// 		this.setState({ img: 'back' });
	// 		this.setState({ imgSrc: this.props.pokemon.sprites.front });
	// 	} else {
	// 		this.setState({ img: 'front' });
	// 		this.setState({ imgSrc: this.props.pokemon.sprites.back });
	// 	}
	// };

	render() {
		return (
			<Card.Group itemsPerRow={6}>
				{/* <h1>Hello From Pokemon Collection</h1> */}
				{this.props.pokemons.map((pokemon) => (
					<PokemonCard pokemon={pokemon} flip={this.flip} img={'front'} />
				))}
			</Card.Group>
		);
	}
}

export default PokemonCollection;
