import React from 'react';
import { Card } from 'semantic-ui-react';

class PokemonCard extends React.Component {
	state = { img: this.props.img, src: this.props.pokemon.sprites.front };

	flip = () => {
		if (this.state.img === 'front') {
			this.setState({
				src: this.props.pokemon.sprites.back,
				img: 'back'
			});
		} else {
			this.setState({
				src: this.props.pokemon.sprites.front,
				img: 'front'
			});
		}
	};

	render() {
		const { id, name, stats, sprites } = this.props.pokemon;

		return (
			<Card key={id}>
				<div>
					<div className="image" onClick={this.flip}>
						<img alt="oh no!" src={this.state.src} />
					</div>
					<div className="content">
						<div className="header">{name}</div>
					</div>
					<div className="extra content">
						<span>
							<i className="icon heartbeat red" />
							{stats.find((s) => s.name === 'hp').value} hp
						</span>
					</div>
				</div>
			</Card>
		);
	}
}

export default PokemonCard;
