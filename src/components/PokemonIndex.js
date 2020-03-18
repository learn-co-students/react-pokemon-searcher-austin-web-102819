import React from 'react';
import PokemonCollection from './PokemonCollection';
import PokemonForm from './PokemonForm';
import Search from './Search';
import Filter from './Filter';
import { Container } from 'semantic-ui-react';

const URL = 'http://localhost:3000/pokemon';
class PokemonPage extends React.Component {
	state = { pokemons: [], allPokemons: [], searchText: '' };

	fetchPokemons = () => {
		fetch(URL)
			.then((resp) => resp.json())
			.then((data) => this.setState({ pokemons: data, allPokemons: data }));
	};

	componentDidMount() {
		this.fetchPokemons();
	}

	// onKeyPress = (e) => {
	// 	console.log(e.target.value);
	// 	if (e.key === 'Enter') {
	// 		if (e.target.value.length > 0) {
	// 			this.setState({
	// 				pokemons: this.state.allPokemons.filter((p) =>
	// 					p.name.includes(e.target.value)
	// 				)
	// 			});
	// 		} else {
	// 			this.setState({
	// 				pokemons: this.state.allPokemons
	// 			});
	// 		}
	// 	}
	// };

	onChange = (e) => {
		console.log(this.state.allPokemons);

		const filteredArray = this.state.allPokemons.filter((pokemon) =>
			pokemon.name.includes(e.target.value)
		);

		this.setState({ pokemons: filteredArray });
	};

	handleSubmitPokemon = (pokemon) => {
		console.log(pokemon.stats);

		const configObject = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: JSON.stringify({
				...pokemon
			})
		};

		fetch(URL, configObject)
			.then((resp) => resp.json())
			.then((data) => this.fetchPokemons());
	};

	FilterBy = {
		ability: function(filterText) {
			console.log(filterText);
		},
		type: function(e, filterText) {
			console.log(e.target);
		}
	};

	handleFilter = (e) => {
		e.preventDefault();

		let filteredArray = [];
		// this.FilterBy[e.target.filter];
		switch (e.target.filter.value) {
			case 'ability':
				filteredArray = this.state.pokemons.filter((pokemon) =>
					pokemon.abilities.includes(e.target.filterText.value)
				);

				break;
			case 'type':
				filteredArray = this.state.pokemons.filter((pokemon) =>
					pokemon.types.includes(e.target.filterText.value)
				);

				break;
			default:
				filteredArray = this.state.allPokemons;
				break;
		}

		this.setState({ pokemons: filteredArray });
	};

	render() {
		return (
			<Container>
				<h1>Pokemon Searcher</h1>
				<br />
				<PokemonForm handleSubmitPokemon={this.handleSubmitPokemon} />
				<br />
				Search by Name:
				<Search onChange={this.onChange} />
				<br />
				Filter by:
				<Filter handleFilter={this.handleFilter} />
				<br />
				<PokemonCollection pokemons={this.state.pokemons} />
			</Container>
		);
	}
}

export default PokemonPage;
