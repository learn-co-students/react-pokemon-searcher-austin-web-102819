import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.props.pokemon.map(e => <PokemonCard key={e.id} pokemon={e}></PokemonCard>)}
      </Card.Group>
    )
  }
}

export default PokemonCollection
