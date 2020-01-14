import React from "react";
import { Form } from "semantic-ui-react";

class PokemonForm extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      hp: "",
      frontUrl: "",
      backUrl: ""
    };
  }

  pushToAPI() {
    fetch("http://localhost:3000/pokemon", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: this.state.name,
        stats: [{ value: this.state.hp, name: "hp" }],
        sprites: { front: this.state.frontUrl, back: this.state.backUrl }
      })
    });
    let newPoke = {
      name: this.state.name,
      stats: [{ value: this.state.hp, name: "hp" }],
      sprites: { front: this.state.frontUrl, back: this.state.backUrl }
    };
    this.props.addPokemon(newPoke);
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState(
      {
        name: e.target.name.value,
        hp: e.target.hp.value,
        frontUrl: e.target.frontUrl.value,
        backUrl: e.target.backUrl.value
      },
      () => this.pushToAPI()
    );
  };
  
  delete = () => {
    fetch(`http://localhost:3000/pokemon/207`, {
      method: "delete"
    }).then(response =>
      response.json().then(json => {
        return json;
      })
    );
    this.props.deletePokemon();
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
        <button onClick={this.delete}>Delete Last</button>
      </div>
    );
  }
}

export default PokemonForm;
