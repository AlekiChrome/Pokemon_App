import React, { Component } from 'react';
import axios from "axios";

class Pokemon extends Component {
    constructor() {
        super();
        this.state= {
            searchPokemon: "",
        };
    }

    handleChange = (e) => {
        this.setState({
            searchPokemon: e.target.value,
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault();
    }




    render() {
    return (
        <div>

        </div>
    )
  }
}

export default Pokemon
