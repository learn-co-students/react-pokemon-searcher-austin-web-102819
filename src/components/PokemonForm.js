import React from 'react';
import { Form } from 'semantic-ui-react';

class PokemonForm extends React.Component {
	constructor() {
		super();

		this.state = {
			name: '',
			sprites: {
				front: '',
				back: ''
			},
			stats: [
				{
					name: '',
					value: ''
				}
			]
		};
	}

	handleSubmit = (e) => {
		e.preventDefault();

		console.log(e.target.name);

		this.setState(
			{
				name: e.target.name.value,
				// hp: e.target.hp.value,
				sprites: {
					front: e.target.frontUrl.value,
					back: e.target.backUrl.value
				},
				stats: [
					{
						name: 'hp',
						value: e.target.hp.value
					}
				]
			},
			() => {
				this.props.handleSubmitPokemon(this.state);
			}
		);
	};

	render() {
		return (
			<div>
				<h3>Add a Pokemon!</h3>
				<Form onSubmit={this.handleSubmit}>
					<Form.Group widths="equal">
						<Form.Input fluid label="Name" placeholder="Name" name="name" />
						<Form.Input fluid label="hp" placeholder="hp" name="hp" />
						<Form.Input
							fluid
							label="Front Image URL"
							placeholder="url"
							name="frontUrl"
						/>
						<Form.Input
							fluid
							label="Back Image URL"
							placeholder="url"
							name="backUrl"
						/>
					</Form.Group>
					<Form.Button>Submit</Form.Button>
				</Form>
			</div>
		);
	}
}

export default PokemonForm;
