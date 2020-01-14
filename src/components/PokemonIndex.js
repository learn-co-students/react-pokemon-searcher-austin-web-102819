import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  constructor(props) {
    super(props)

    this.state= {
      pokemon: [],
      search: []
    }
  }

  deletePokemon = () => {
    this.setState({
      search: this.state.pokemon
    })
  }

  addPokemon = (poke) =>  {
    console.log('hello')
    this.setState({search: [poke, ...this.state.pokemon]})
  }

  searchPoke = (e) => {
    let array = []
    this.state.pokemon.forEach(pokemon => (pokemon.name.includes(e.target.value)) ? array.push(pokemon) : null)
    this.setState({search: array})
  }

  componentDidMount() {
    fetch(`http://localhost:3000/pokemon`).then(res => res.json()).then(res => this.setState({pokemon: res, search: res}))
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm deletePokemon={this.deletePokemon} addPokemon={this.addPokemon}/>
        <br />
        <Search onChange={this.searchPoke} />
        <br />
        <PokemonCollection pokemon={this.state.search}/>
      </Container>
    )
  }
}

export default PokemonPage
