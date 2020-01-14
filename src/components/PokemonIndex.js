import React from 'react';
import PokemonCollection from './PokemonCollection';
import PokemonForm from './PokemonForm';
import Search from './Search';
import { Container } from 'semantic-ui-react';

class PokemonPage extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemon: [],
      searchTerm: '',
    };
  }

  loadPokemon = () => {
    fetch('http://localhost:3000/pokemon')
      .then(res => res.json())
      .then(json => this.setState({ pokemon: json }));
  };
  componentDidMount() {
    this.loadPokemon();
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm onUpdate={this.loadPokemon} />
        <br />
        <Search
          value={this.state.searchTerm}
          onChange={e => this.setState({ searchTerm: e.target.value })}
        />
        <br />
        <PokemonCollection
          pokemon={this.state.pokemon.filter(e =>
            e.name.includes(this.state.searchTerm)
          )}
        />
      </Container>
    );
  }
}

export default PokemonPage;
